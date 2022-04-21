const BACKGROUND_COLOR = "#444444";

const LINE_THRESHOLD = 16;
const LINE_THICKNESS = 3;
const LINE_COLOR     = "#00FFFF";

const MAP_MARK_OFFSET = 1;
const MAP_MARK_WIDTH  = 3;

const FRAME_WIDTH  = 167;
const FRAME_HEIGHT = 47;
const LINE_YOFFSET = 8;
const LINE_BREAK_YOFFSET = 14;

const MAP_SCALE = 2;
const SELECTED_MAP_XOFFSET = 10;
const WARP_LINE_YOFFSET = 5;
const WARP_FONT_SIZE    = 13;

const MARKS_YOFFSET    = 20;
const PROGRESS_YOFFSET = MARKS_YOFFSET*2;
const MARK_SIZE        = 32;
const MARK_SEPARATION  = 5;
const UNCHECKED_FILTER = "grayscale(100%) opacity(50%)";
const MARKFOUND_SIZE  = 1;
const MARKFOUND_COLOR = "#AAAAAA"

const CONFIG_YOFFSET = 5;

let aux_canvas;
let aux_context;
let rerender_all = true;
let rerender_location = true;
let last_rendered_location = "";

var loading_process = {};
var settings;
var images = [];
function LoadImages() {
    // Get all images
    var list = ["images/" + game.name + "/map.png", "images/" + game.name + "/frame.png"];
    if (!settings) { list.push("images/settings.png"); }

    for (let key in game.locations) {
        list.push("images/" + game.name + "/maps/" + key + ".png");
    }

    loading_process.row_count =  0;
    for (let row of game.marks) {
        loading_process.row_count += 1;
        for (let pair of row) {
            if(pair[1] !== undefined && !images.includes(pair[0])) { list.push("images/marks/" + pair[0] + ".png") }
        }
    }

    for (let row of game.progress) {
        loading_process.row_count += 1;
        for (let pair of row) {
            if (pair[1] !== undefined && !images.includes(pair[0])) { list.push("images/" + game.name + "/progress/" + pair[0] + ".png") }
        }
    }

    // Start loading them
    if (list.length == 0) {
        game.ready = true;
        return;
    }

    loading_process.max_width  = 0;
    loading_process.max_height = 0;
    loading_process.loaded = 0;
    loading_process.to_load = list.length;
    for (let path of list) {
        const image = new Image();
        image.onload = ImageLoaded;
        image.onerror = ImageError;
        image.src = path;
    }
}
function ImageLoaded() {
    if (this.src.includes("map.png")) {
        game.map = {
            image: this,
            x: 0, y: 0,
            w: this.naturalWidth  * MAP_SCALE,
            h: this.naturalHeight * MAP_SCALE
        }

        loading_process.map_loaded = true;
        if (loading_process.settings_loaded) {
            let h = GetLeftSideHeight();
            if (h > loading_process.max_height) loading_process.max_height = h;
        }
    }
    else if (this.src.includes("frame.png")) {
        game.frame = this;
    }
    else if (this.src.includes("settings.png")) {
        settings = this;

        loading_process.settings_loaded = true;
        if (loading_process.map_loaded) {
            let h = GetLeftSideHeight();
            if (h > loading_process.max_height) loading_process.max_height = h;
        }
    }
    else if (this.src.includes("/marks/") || this.src.includes("/progress/")) {
        images[GetNameImage(this.src)] = this;
    }
    else {
        try {
            game.locations[GetNameImage(this.src)].image = this;
        }
        catch(err) {
            console.log(err);
            console.log(this.src);
            console.log(GetNameImage(this.src));
        }

        // Get max width/height for later
        if (this.naturalWidth  > loading_process.max_width)  loading_process.max_width  = this.naturalWidth;
        if (this.naturalHeight > loading_process.max_height) loading_process.max_height = this.naturalHeight;
    }

    loading_process.loaded += 1;
    if (loading_process.loaded == loading_process.to_load) {
        // Set canvas dimensions
        game.max_width  = loading_process.max_width;
        game.max_height = loading_process.max_height;

        SetCanvasDimensions();

        game.ready = true;
    }
}
function ImageError() { console.error("ERROR: Couldn't load " + this.src); }

function GetNameImage(path) {
    let array = path.split("/");
    return array[array.length-1].split(".")[0];
}

function SetCanvasDimensions() {
    canvas.width  = game.max_width + game.map.w + SELECTED_MAP_XOFFSET;
    canvas.height = game.max_height;
    aux_canvas.width  = canvas.width;
    aux_canvas.height = canvas.height;
}

function GetLeftSideHeight() {
    return (
        game.map.h +
        MARKS_YOFFSET + PROGRESS_YOFFSET + loading_process.row_count*(MARK_SIZE+MARK_SEPARATION) +
        CONFIG_YOFFSET + settings.naturalHeight
    );
}

/*********************************************************/

function SetSmoothing(state) {
    aux_context.webkitImageSmoothingEnabled = state;
    aux_context.mozImageSmoothingEnabled    = state;
    aux_context.imageSmoothingEnabled       = state;
}

function RenderMap() {
    SetSmoothing(false);

    // ----- Draw main map -----
    DrawImage(game.map.image, game.map);

    let location = game.locations[current_location];

    // ----- Draw text -----
    aux_context.save(); {
        aux_context.font = "bold " + game.font_size + " " + game.font;
        aux_context.textAlign = "center";
        aux_context.fillStyle = "#111111";

        var text_position = {
            x: game.map.w - (FRAME_WIDTH /2)*MAP_SCALE,
            y: game.map.h - (FRAME_HEIGHT/2)*MAP_SCALE + LINE_YOFFSET
        };
        let lines = location.name.split("\n");
        switch (lines.length) {
            case 1: {
                aux_context.fillText(lines[0], text_position.x, text_position.y);
            } break;
            default: {
                console.error("ERROR: Text can have more than 2 lines! Only rendering the 2 first lines.");
            } // falldown
            case 2: {
                aux_context.fillText(lines[0], text_position.x, text_position.y - LINE_BREAK_YOFFSET);
                aux_context.fillText(lines[1], text_position.x, text_position.y + LINE_BREAK_YOFFSET);
            } break;
        }
    } aux_context.restore();

    // ----- Draw map mark -----
    aux_context.save(); {
        aux_context.lineWidth = MAP_MARK_WIDTH;
        aux_context.strokeStyle = LINE_COLOR;
        let v = {
            x: location.x*MAP_SCALE -   MAP_MARK_OFFSET,
            y: location.y*MAP_SCALE -   MAP_MARK_OFFSET,
            w: location.w*MAP_SCALE + 2*MAP_MARK_OFFSET,
            h: location.h*MAP_SCALE + 2*MAP_MARK_OFFSET,
        };
        DrawBox(v);
    } aux_context.restore();
}

function GetWarpRenderInfo(location, warp) {
    let info = {
        type: "image",
        image: images["unknown"],
        x: 0, y: 0, w: 0, h: 0,
        text_position: {x: 0, y:0 }, text: ""
    };
    if (warp.link_type) {
        if (warp.link_type == LINKTYPE_MARK) {
            info.image = images[warp.link];
        }
        else {
            info.type = "text";
            // Draw location/warp
            info.x = rendered_location.x + warp.x*rendered_location.scale - game.frame.naturalWidth/2 ;
            info.y = rendered_location.y + warp.y*rendered_location.scale - game.frame.naturalHeight/2;
            info.w = game.frame.naturalWidth;
            info.h = game.frame.naturalHeight;
            info.image = game.frame;

            info.text_position = {
                x: rendered_location.x + warp.x*rendered_location.scale,
                y: rendered_location.y + warp.y*rendered_location.scale + WARP_LINE_YOFFSET
            }
            info.text = game.locations[warp.link_location].name;
            if (game.locations[warp.link_location].link_name) info.text = game.locations[warp.link_location].link_name;
            if (game.warps[warp.link_location][warp.link].name) info.text = game.warps[warp.link_location][warp.link].name;
        }
    }

    if (info.type == "image") {
        info.x = rendered_location.x + warp.x*rendered_location.scale - info.image.naturalWidth/2;
        info.y = rendered_location.y + warp.y*rendered_location.scale - info.image.naturalHeight/2;
        info.w = info.image.naturalWidth;
        info.h = info.image.naturalHeight;
    }

    return info;
}
let rendered_location = {};
function RenderLocation() {
    SetSmoothing(checkbox_smooth.checked);

    // ----- Render drawing space -----
    let background = {
        x: game.map.w + SELECTED_MAP_XOFFSET,
        y: 0,
        w: game.max_width,
        h: game.max_height
    };
    DrawSquareContextless(background, BACKGROUND_COLOR);

    let location = game.locations[current_location];

    // ----- Render selected map -----
    let ratio = {
        width:  background.w / location.image.naturalWidth,
        height: background.h / location.image.naturalHeight
    };
    let scale;
    let center = { x: 0, y: 0 };
    if (ratio.height < ratio.width) {
        scale = ratio.height;
        center.x = (background.w - location.image.naturalWidth*scale) / 2;
    }
    else {
        scale = ratio.width;
        center.y = (background.h - location.image.naturalHeight*scale) / 2;
    }
    rendered_location = {
        x: background.x + center.x,
        y: background.y + center.y,
        w: location.image.naturalWidth  * scale,
        h: location.image.naturalHeight * scale,
        scale: scale
    };
    if (game.name == platinum.name) {
        rendered_location = {
            x: background.x,
            y: background.y,
            w: location.image.naturalWidth,
            h: location.image.naturalHeight,
            scale: 1
        };
    }
    DrawImage(location.image, rendered_location);

    // ----- Render warps -----
    aux_context.save(); {
        aux_context.font = "bold " + WARP_FONT_SIZE + "px Avenir";
        aux_context.textAlign = "center";
        aux_context.fillStyle = "#111111";
        for (var key in game.warps[current_location]) {
            let warp = game.warps[current_location][key];
            let info = GetWarpRenderInfo(location, warp);
            // DEBUG
            if (game.name == platinum.name) {
                warp.link_type = LINKTYPE_WARP;
                warp.link = key;
                warp.link_location = current_location;
                let info = GetWarpRenderInfo(location, warp);
                DrawImage(game.frame, info);
                aux_context.fillText(key, info.text_position.x, info.text_position.y);
                continue;
            }
            if (info.type == "image") {
                DrawImage(info.image, info);
            }
            else {
                DrawImage(game.frame, info);
                aux_context.fillText(info.text, info.text_position.x, info.text_position.y);
            }
        }

    } aux_context.restore();
}

function GetPositionCopy(v) { return { x: v.x, y: v.y, w: v.w, h: v.h }; }
function RenderMarks() {
    SetSmoothing(true);

    let unfiltered_marks = [];
    let filtered_marks = [];
    let boxes = [];
    let v = {
        x: MARK_SEPARATION,
        y: game.map.h + MARKS_YOFFSET,
        w: MARK_SIZE,
        h: MARK_SIZE
    };
    // ----- Obtain marks -----
    for (let row of game.marks) {
        for (let pair of row) {
            let name  = pair[0];
            let count = pair[1];
            if (count !== undefined) {
                unfiltered_marks.push({ name: name, position: GetPositionCopy(v)});
                if (count && count > 0) { boxes.push({ position: GetPositionCopy(v) }); }
            }

            v.x += MARK_SIZE + MARK_SEPARATION;
        }
        v.y += MARK_SIZE + MARK_SEPARATION;
        v.x = MARK_SEPARATION;
    }

    // ----- Render background progress tracker -----
    v.y += PROGRESS_YOFFSET;
    let background = {
        x: 0,
        y: v.y - MARK_SEPARATION,
        w: game.progress[0].length * (MARK_SIZE+MARK_SEPARATION) + MARK_SEPARATION,
        h: game.progress.length    * (MARK_SIZE+MARK_SEPARATION) + MARK_SEPARATION
    };
    DrawSquareContextless(background, BACKGROUND_COLOR);

    // ----- Obtain progress tracker -----
    for (let row of game.progress) {
        for (let pair of row) {
            let name  = pair[0];
            let count = pair[1];
            if (count !== undefined) {
                let m = { name: name, position: GetPositionCopy(v)};
                if (game.obtained.has(name)) unfiltered_marks.push(m);
                else filtered_marks.push(m);
                if (count && count > 0) { boxes.push({ position: GetPositionCopy(v) }); }
            }
            v.x += MARK_SIZE + MARK_SEPARATION;
        }
        v.y += MARK_SIZE + MARK_SEPARATION;
        v.x = MARK_SEPARATION;
    }

    // ----- Render everything in bulk -----
    aux_context.save(); {
        aux_context.lineWidth   = MARKFOUND_SIZE;
        aux_context.strokeStyle = MARKFOUND_COLOR;
        for (let b of boxes) {
            DrawBox(b.position);
        }

        for (let m of unfiltered_marks) {
            DrawImage(images[m.name], m.position);
        }

        aux_context.filter = UNCHECKED_FILTER;
        for (let m of filtered_marks) {
            DrawImage(images[m.name], m.position);
        }
    } aux_context.restore();
}

function RenderConfigButton() {
    let v = {
        x: 0,
        y: canvas.height - settings.naturalHeight,
        w: settings.naturalWidth,
        h: settings.naturalHeight
    };
    DrawImage(settings, v);
}

function RenderLine() {
    SetSmoothing(false);

    if (current_state != STATE_DEFAULT) {
        let info;
        if (current_state == STATE_LINK1) {
            let location = game.locations[current_location];
            let warp = game.warps[current_location][link_warp];
            info = {
                x: rendered_location.x + warp.x*rendered_location.scale,
                y: rendered_location.y + warp.y*rendered_location.scale
            }
        }
        else {
            let location = game.locations[link_location];
            info = {
                x: (location.x + location.w/2) * MAP_SCALE,
                y: (location.y + location.h/2) * MAP_SCALE
            }
        }
        context.save(); {
            context.strokeStyle = LINE_COLOR;
            context.lineWidth = LINE_THICKNESS;
            context.beginPath();
            context.moveTo(info.x, info.y);
            context.lineTo(mouse_position.x, mouse_position.y);
            context.stroke();
        } context.restore();
    }
}

function Render() {
    if (rerender_all || rerender_location || last_rendered_location != current_location) {
        if (rerender_all) {
            aux_context.clearRect(0, 0, aux_canvas.width, aux_canvas.height);
            RenderMarks();
            RenderConfigButton();
        }
        else {
            aux_context.clearRect(game.map.x, game.map.y, game.map.w, game.map.h);
            aux_context.clearRect(game.map.w, 0, game.max_width + SELECTED_MAP_XOFFSET, game.max_height);
        }
        RenderMap();
        RenderLocation();

        rerender_all = false;
        rerender_location = false;
        last_rendered_location = current_location;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(aux_canvas, 0, 0);
    RenderLine();
}

function DrawSquareContextless(v, color) {
    aux_context.save(); {
        aux_context.fillStyle = color;
        aux_context.fillRect(v.x, v.y, v.w, v.h);
    } aux_context.restore();
}
function DrawSquare(v) {
    aux_context.fillRect(v.x, v.y, v.w, v.h);
}

function DrawBox(v) {
    aux_context.strokeRect(v.x, v.y, v.w, v.h);
}
function DrawBoxContextless(v, width, color) {
    aux_context.save(); {
        aux_context.lineWidth   = width;
        aux_context.strokeStyle = color;
        aux_context.strokeRect(v.x, v.y, v.w, v.h);
    } aux_context.restore();
}

function DrawImage(image, v) {
    aux_context.drawImage(image, v.x, v.y, v.w, v.h);
}