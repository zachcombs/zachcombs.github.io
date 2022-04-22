var platinum = {
    ready: false,
    name: "platinum",
    start_location: "sandgem",
    font: "NDS_Font",
    font_size: "38px",
    locations: {
        // Cities
        sandgem:      {x: 36,  y: 143, w: 8,  h: 8,  name: "Sandgem Town"   },
        jubilife:     {x: 29,  y: 122, w: 15, h: 15, name: "Jubilife City"  },
        oreburgh:     {x: 57,  y: 122, w: 15, h: 15, name: "Oreburgh City"  },
        floaroma:     {x: 36,  y: 94,  w: 8,  h: 15, name: "Floaroma Town"  },
        eterna:       {x: 64,  y: 73,  w: 15, h: 15, name: "Eterna City"    },
        hearthome:    {x: 99,  y: 108, w: 15, h: 15, name: "Hearthome City" },
        solaceon:     {x: 120, y: 101, w: 15, h: 8,  name: "Solaceon Town"  },
        veilstone:    {x: 148, y: 87,  w: 15, h: 15, name: "Veilstone City" },
        pastoria:     {x: 127, y: 136, w: 15, h: 15, name: "Pastoria City"  },
        celestic:     {x: 100, y: 73,  w: 8,  h: 8,  name: "Celestic Town"  },
        canalave:     {x: 8,   y: 115, w: 8,  h: 15, name: "Canalave City"  },
        snowpoint:    {x: 78,  y: 3,   w: 8,  h: 15, name: "Snowpoint City" },
        sunyshore:    {x: 183, y: 122, w: 15, h: 15, name: "Sunyshore City" },
        league:       {x: 183, y: 80,  w: 8,  h: 8,  name: "Pokémon League" },
        fightarea:    {x: 134, y: 52,  w: 15, h: 8,  name: "Fight Area"     },
        survivalarea: {x: 141, y: 31,  w: 8,  h: 8,  name: "Survival Area"  },
        resortarea:   {x: 176, y: 59,  w: 8,  h: 8,  name: "Resort Area"    },
        
        // Routes
        route201:          {x: 22,  y: 143, w: 8,  h: 8,  name: "Route 201"                        },
        oreburghgate_r203: {x: 47,  y: 122, w: 8,  h: 8,  name: "Oreburgh Gate\nRoute 203"         },
        route204:          {x: 36,  y: 111, w: 8,  h: 8,  name: "Route 204"                        },
        windworks:         {x: 50,  y: 101, w: 8,  h: 8,  name: "Valley Windworks"                 },
        ironworks_meadow:  {x: 36,  y: 81,  w: 8,  h: 8,  name: "Fuego Ironworks\nFloaroma Meadow" },
        r212_mansion:      {x: 99,  y: 136, w: 15, h: 15, name: "Route 212\nPokémon Mansion"       },
        route214:          {x: 155, y: 108, w: 8,  h: 8,  name: "Route 214"                        },
        valorlakefront:    {x: 148, y: 122, w: 15, h: 15, name: "Valor Lakefront\nRoute 213"       },
        route206:          {x: 64,  y: 94,  w: 8,  h: 15, name: "Route 206"                        },
        route207_route208: {x: 78,  y: 115, w: 8,  h: 8,  name: "Route 207\nRoute 208"             },
        route209:          {x: 120, y: 115, w: 8,  h: 8,  name: "Route 209"                        },
        route210_route215: {x: 120, y: 80,  w: 15, h: 15, name: "Route 210\nRoute 215"             },
        route211:          {x: 85 , y: 73,  w: 8,  h: 8,  name: "Route 211"                        },
        route216_route217: {x: 64,  y: 18,  w: 8,  h: 15, name: "Route 216\nRoute 217"             },
        route221:          {x: 49,  y: 157, w: 15, h: 8,  name: "Route 221"                        },
        route222:          {x: 170, y: 129, w: 8,  h: 8,  name: "Route 222"                        },
        route225:          {x: 134, y: 41,  w: 8,  h: 8,  name: "Route 225"                        },
        route226_route227: {x: 162, y: 24,  w: 8,  h: 15, name: "Route 226\nRoute 227"             },
        route228:          {x: 169, y: 45,  w: 8,  h: 8,  name: "Route 228"                        },
        
        // Important locations
        jubilifetv_poketch: {x: 24,  y: 111, w: 8, h: 8,  name: "Jubilife TV\nPokétch Company" },
        eternagalactic:     {x: 64,  y: 60,  w: 8, h: 8,  name: "Galactic Eterna"              },
        coronet:            {x: 78,  y: 94,  w: 8, h: 15, name: "Mt. Coronet"                  },
        solaceonruins:      {x: 138, y: 103, w: 8, h: 8,  name: "Solaceon Ruins"               },
        departmentstore:    {x: 145, y: 74,  w: 8, h: 8,  name: "Department Store"             },
        galactichq:         {x: 158, y: 74,  w: 8, h: 8,  name: "Team Galactic HQ"             },
        coronetsummit:      {x: 85,  y: 52,  w: 8, h: 15, name: "Mt. Coronet Summit"           },
        ironisland:         {x: 22,  y: 66,  w: 8, h: 8,  name: "Iron Island"                  },
        victoryroad:        {x: 183, y: 92,  w: 8, h: 8,  name: "Victory Road"                 },
        eternaforest_r205:  {x: 50,  y: 73,  w: 8, h: 8,  name: "Eterna Forest\nRoute 205"     },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        sandgem: {
            center:     {x: 270, y: 117                           },
            mart:       {x: 430, y: 113                           },
            house:      {x: 109, y: 262                           },
            profhouse:  {x: 256, y: 264                           },
            center_up:  {x: 398, y: 359, name: "Sandgem (Center)" },
            center_mid: {x: 486, y: 392, name: "Sandgem (Center)" },
            center_bot: {x: 578, y: 357, name: "Sandgem (Center)" },
        },
        jubilife: {
            poketchleft:    {x: 165, y: 118                            },
			poketchright:   {x: 216, y: 154                            },
			jubilifetv:     {x: 444, y: 113                            },
			righttv:        {x: 635, y: 155                            },
			mart:           {x: 623, y: 256                            },
			center:         {x: 637, y: 389                            },
			trade:          {x: 263, y: 408                            },
			tradebot:       {x: 157, y: 508                            },
			house:          {x: 479, y: 463                            },
			r218:           {x: 49,  y: 207                            },
			trade_entrance: {x: 104, y: 369, name: "Jubilife (Trade)"  },
			trade_green:    {x: 128, y: 271, name: "Jubilife (Trade)"  },
			trade_red:      {x: 162, y: 319, name: "Jubilife (Trade)"  },
			center_up:      {x: 579, y: 525, name: "Jubilife (Center)" },
			center_mid:     {x: 681, y: 576, name: "Jubilife (Center)" },
			center_bot:     {x: 737, y: 534, name: "Jubilife (Center)" },
        },
        oreburgh: {
            entrance:     {x: 62,  y: 108                             },
			top1:         {x: 248, y: 66                              },
			top2:         {x: 359, y: 72                              },
			mart:         {x: 474, y: 76                              },
			museum:       {x: 792, y: 78                              },
			center:       {x: 760, y: 197                             },
			rightcenter:  {x: 903, y: 296                             },
            leftcenter:   {x: 599, y: 143                             },
			gym:          {x: 422, y: 193                             },
			leftgym:      {x: 279, y: 196                             },
			minehouse:    {x: 824, y: 403                             },
			mineentrance: {x: 745, y: 682                             },
			center_up:    {x: 284, y: 461, name: "Orenburgh (Center)" },
			center_mid:   {x: 381, y: 510, name: "Orenburgh (Center)" },
			center_bot:   {x: 478, y: 466, name: "Orenburgh (Center)" },
        },
        floaroma: {
			meadows:    {x: 146, y: 66                             },
			leftflower: {x: 281, y: 191                            },
			flowershop: {x: 425, y: 144                            },
			mart:       {x: 490, y: 226                            },
			leftcenter: {x: 488, y: 334                            },
			center:     {x: 362, y: 334                            },
			center_up:  {x: 13,  y: 303, name: "Floaroma (Center)" },
			center_mid: {x: 110, y: 351, name: "Floaroma (Center)" },
			center_bot: {x: 207, y: 305, name: "Floaroma (Center)" },
        },
        eterna: {
			galactic:    {x: 151, y: 45                           },
			leftstatue:  {x: 326, y: 76                           },
			botstatue:   {x: 502, y: 265                          },
			center:      {x: 153, y: 180                          },
			underground: {x: 232, y: 231                          },
			bikeshop:    {x: 232, y: 288                          },
			mart:        {x: 215, y: 401                          },
			rightmart:   {x: 313, y: 467                          },
			gym:         {x: 264, y: 563                          },
			leftgym:     {x: 42,  y: 572                          },
			route:       {x: 143, y: 666                          },
			center_up:   {x: 418, y: 506, name: "Eterna (Center)" },
			center_mid:  {x: 513, y: 548, name: "Eterna (Center)" },
			center_bot:  {x: 608, y: 502, name: "Eterna (Center)" },
        },
        hearthome: {
			routeleft:   {x: 76,  y: 641                            },
			routemid:    {x: 175, y: 714                            },
			routeright:  {x: 936, y: 641                            },
			church:      {x: 198, y: 420                            },
			poffin:      {x: 390, y: 429                            },
			aaaa5:       {x: 479, y: 499                            },
			fanclub:     {x: 648, y: 421                            },
			hotel:       {x: 743, y: 499                            },
			center:      {x: 276, y: 271                            },
			bebe:        {x: 363, y: 325                            },
			contesthall: {x: 503, y: 253                            },
			righthall:   {x: 616, y: 283                            },
			gym:         {x: 826, y: 272                            },
			squareright: {x: 846, y: 69                             },
			squareleft:  {x: 173, y: 62                             },
			center_up:   {x: 415, y: 108, name: "Hearthome (Center)"},
			center_mid:  {x: 502, y: 148, name: "Hearthome (Center)"},
			center_bot:  {x: 596, y: 108, name: "Hearthome (Center)"},
        },
        solaceon: {
			daycare:     {x: 175, y: 48                             },
			rightcare:   {x: 374, y: 59                             },
			right1:      {x: 598, y: 83                             },
			right2:      {x: 623, y: 185                            },
			center:      {x: 379, y: 181                            },
			rightcenter: {x: 468, y: 233                            },
			ruins:       {x: 848, y: 227                            },
			mart:        {x: 465, y: 296                            },
			center_up:   {x: 19,  y: 357, name: "Solaceon (Center)" },
			center_mid:  {x: 112, y: 394, name: "Solaceon (Center)" },
			center_bot:  {x: 182, y: 357, name: "Solaceon (Center)" },
        },
        veilstone: {
			route215:      {x: 126, y: 273                             },
			route214:      {x: 753, y: 751                             },
			warehouse:     {x: 469, y: 154                             },
			department:    {x: 469, y: 309                             },
			galacticleft:  {x: 678, y: 97                              },
			galactigmid:   {x: 728, y: 167                             },
			galacticright: {x: 776, y: 98                              },
			centerupleft:  {x: 631, y: 295                             },
			centerupright: {x: 727, y: 296                             },
			center:        {x: 726, y: 411                             },
			rightcasino:   {x: 713, y: 549                             },
			casino:        {x: 552, y: 543                             },
			leftcasino1:   {x: 391, y: 555                             },
			leftcasino2:   {x: 295, y: 620                             },
			gym:           {x: 202, y: 397                             },
			center_up:     {x: 81, y: 111 , name: "Veilstone (Center)" },
			center_mid:    {x: 160, y: 147, name: "Veilstone (Center)" },
			center_bot:    {x: 240, y: 104, name: "Veilstone (Center)" },
        },
        pastoria: {
            route:      {x: 952, y: 187                            },
			leftroute:  {x: 749, y: 255                            },
			center:     {x: 370, y: 199                            },
			rightgym:   {x: 368, y: 310                            },
			gym:        {x: 193, y: 354                            },
			upmart:     {x: 382, y: 454                            },
			rightmart:  {x: 542, y: 452                            },
			mart:       {x: 388, y: 559                            },
			leftmart:   {x: 191, y: 554                            },
			center_up:  {x: 653, y: 618, name: "Pastoria (Center)" },
			center_mid: {x: 750, y: 663, name: "Pastoria (Center)" },
			center_bot: {x: 847, y: 613, name: "Pastoria (Center)" },


        },
        celestic: {
            topleft:     {x: 39, y: 76                             },
			topmid:      {x: 246, y: 82                            },
			topright:    {x: 407, y: 77                            },
			cave:        {x: 245, y: 180                           },
			botleft:     {x: 101, y: 364                           },
			center:      {x: 390, y: 365                           },
			center_up:   {x: 541, y: 106, name: "Celestic (Center)"},
			center_mid:  {x: 638, y: 144, name: "Celestic (Center)"},
			center_bot:  {x: 721, y: 105, name: "Celestic (Center)"},
        },
        canalave: {
            route:      {x: 472, y: 512                           },
			left1:      {x: 75,  y: 96                            },
			gym:        {x: 98,  y: 214                           },
			left2:      {x: 84,  y: 304                           },
			left3:      {x: 100, y: 378                           },
			right1:     {x: 334, y: 49                            },
			center:     {x: 335, y: 128                           },
			right2:     {x: 271, y: 229                           },
			mart:       {x: 279, y: 305                           },
			right3:     {x: 289, y: 381                           },
			center_up:  {x: 421, y: 354, name: "Canalave (Center)"},
			center_mid: {x: 509, y: 394, name: "Canalave (Center)"},
			center_bot: {x: 605, y: 346, name: "Canalave (Center)"},
        },
        snowpoint: {
            mart:       {x: 31,  y: 523                            },
			center:     {x: 440, y: 536                            },
			gym:        {x: 246, y: 396                            },
			left:       {x: 27,  y: 230                            },
			right:      {x: 447, y: 233                            },
			temple:     {x: 240, y: 85                             },
			center_up:  {x: 407, y: 426, name: "Snowpoint (Center)"},
			center_mid: {x: 493, y: 466, name: "Snowpoint (Center)"},
			center_bot: {x: 584, y: 418, name: "Snowpoint (Center)"},
        },
        sunyshore: {

        },
        league: {

        },
        fightarea: {

        },
        survivalarea: {

        },
        resortarea: {

        },

        // Routes
        route201:          {

        },
        oreburghgate_r203: {

        },
        route204:          {

        },
        windworks:         {

        },
        ironworks_meadow:  {

        },
        r212_mansion:      {

        },
        route214:          {

        },
        valorlakefront:    {

        },
        route206:          {

        },
        route207_route208: {

        },
        route209:          {

        },
        route210_route215: {

        },
        route211:          {

        },
        route216_route217: {

        },
        route221:          {

        },
        route222:          {

        },
        route225:          {

        },
        route226_route227: {

        },
        route228:          {

        },

        // Important locations
        jubilifetv_poketch: {

        },
        eternagalactic:     {

        },
        coronet:            {

        },
        solaceonruins:      {

        },
        departmentstore: {
            bf1_stairs:  {x: 169, y: 447 },
			f1_left:     {x: 133, y: 260 },
			f1_right:    {x: 260, y: 288 },
			f1_entrance: {x: 204, y: 336 },
			f2_left:     {x: 143, y: 94  },
			f2_right:    {x: 261, y: 124 },
			f3_left:     {x: 473, y: 446 },
			f3_right:    {x: 611, y: 502 },
			f4_left:     {x: 477, y: 256 },
			f4_right:    {x: 607, y: 313 },
			f5_stairs:   {x: 479, y: 86  },
        },
        galactichq:         {

        },
        coronetsummit:      {

        },
        ironisland:         {

        },
        victoryroad:        {

        },
        eternaforest_r205:  {

        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",  0], ["center", 0], ["mart",     0], ["one_way", null]],
        [["normal",  0], ["fighting",    0], ["flying", 0], ["poison", 0], ["ground",   0], ["rock",       0], ["bug",  0], ["ghost",   0], ["fairy", 0]],
        [["steel",   0], ["fire",        0], ["water",  0], ["grass",  0], ["electric", 0], ["psychic",    0], ["ice",  0], ["dragon",  0], ["dark",  0]],
        [["1",       0], ["2",           0], ["3",      0], ["4",      0], ["5",        0], ["6",          0], ["7",    0], ["8",       0]],
    ],
    progress: [
        [["coal_badge", 0], ["forest_badge", 0], ["cobble_badge", 0], ["fen_badge",   0], ["relic_badge", 0], ["mine_badge",   0], ["icicle_badge", 0], ["beacon_badge", 0]],
        [["e4_bug",     0], ["e4_ground",    0], ["e4_fire",      0], ["e4_psychic",  0], ["p_champion",  0]],
        [["hm_cut",     0], ["hm_fly",       0], ["hm_surf",      0], ["hm_strength", 0], ["hm_defog",    0], ["hm_rocksmash", 0], ["hm_waterfall", 0], ["hm_rockclimb", 0]],
        [["bike",       0]],
    ],
    obtained: new Set()
};