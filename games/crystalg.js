let crystalg = {
	debug: false,
    name: "crystalg",
	folder: "crystal",
    start_location: "cherrygrove_r29",
    font: "GameBoy_Font",
    font_size: "22px",

	// Config texts
	config_name: "Crystal (WIP)",
	config_randomizer_author: "G-Meister",
	config_randomizer_link: "",
	//config_tracker_author: "", 
	//config_tracker_link: "",

	// Tracker information
    locations: {
        // Cities
        cherrygrove_r29: {x: 83,  y: 72, w: 8, h: 8, name: "Cherrygrove City\nRoute 29" },
        violet:          {x: 67,  y: 32, w: 8, h: 8, name: "Violet City"                },
        azalea_well:     {x: 51,  y: 96, w: 8, h: 8, name: "Azalea Town\nSlowpoke Well" },
        goldenrod:       {x: 35,  y: 64, w: 8, h: 8, name: "Goldenrod City"             },
        ecruteak:        {x: 51,  y: 16, w: 8, h: 8, name: "Ecruteak City"              },
        olivine_r40:     {x: 19,  y: 32, w: 8, h: 8, name: "Olivine City\nRoute 40"     },
        cianwood:        {x: 3,   y: 72, w: 8, h: 8, name: "Cianwood City"              },
        mahogany_r44:    {x: 91,  y: 16, w: 8, h: 8, name: "Mahogany Town\nRoute 44"    },
        blackthorn:      {x: 115, y: 16, w: 8, h: 8, name: "Blackthorn City"            },
        indigo_e4:       {x: 155, y: 8,  w: 8, h: 8, name: "Indigo Plateau\nElite 4"    },

        pallet:        {x: 179, y: 80,  w: 8,  h: 8,  name: "Pallet Town"               },
        viridian_r22:  {x: 179, y: 48,  w: 8,  h: 8,  name: "Viridian City\nRoute 22"   },
        pewter:        {x: 179, y: 24,  w: 8,  h: 8,  name: "Pewter City"               },
        cerulean_r5:   {x: 227, y: 16,  w: 8,  h: 16, name: "Cerulean City\nRoute 5/25" },
        vermilion_r6:  {x: 227, y: 56,  w: 8,  h: 8,  name: "Vermilion City\nRoute 6"   },
        celadon_r7:    {x: 195, y: 40,  w: 16, h: 8,  name: "Celadon City\nRoute 7/16"  },
        lavender_r8:   {x: 259, y: 40,  w: 8,  h: 8,  name: "Lavender Town\nRoute 8"    },
        saffron:       {x: 227, y: 40,  w: 8,  h: 8,  name: "Saffron City"              },
        fuchsia:       {x: 211, y: 88,  w: 16, h: 8,  name: "Fuchsia City\nRoute 18"    },
        cinnabar:      {x: 179, y: 104, w: 8,  h: 8,  name: "Cinnabar Island"           },
        
        // Routes
        r45_r46:       {x: 107, y: 34,  w: 16, h: 28, name: "Route 45\nRoute 46"      },
        r30_r31:       {x: 83,  y: 44,  w: 8,  h: 14, name: "Route 30\nRoute 31"      },
        alphruins_r32: {x: 67,  y: 67,  w: 8,  h: 14, name: "Ruins of Alph\nRoute 32" },
        r34_ilex:      {x: 35,  y: 81,  w: 8,  h: 8,  name: "Route 34\nIlex Forest"   },
        r35_r36:       {x: 35,  y: 32,  w: 14, h: 14, name: "Route 35\nRoute 36"      },
        r38_r39:       {x: 26,  y: 16,  w: 8,  h: 8,  name: "Route 38\nRoute 39"      },
        r41:           {x: 11,  y: 52,  w: 8,  h: 8,  name: "Route 41"                },
        ragelake_r43:  {x: 91,  y: 0,   w: 8,  h: 8,  name: "Lake of Rage\nRoute 43"  },
        r26_r27:       {x: 149, y: 66,  w: 14, h: 14, name: "Route 26\nRoute 27"      },
        
        r2:            {x: 179, y: 36,  w: 8,  h: 8,  name: "Route 2"                 },
        r19_r20:       {x: 195, y: 104, w: 8,  h: 8,  name: "Route 19\nRoute 20"      },
        r12:           {x: 259, y: 56,  w: 8,  h: 8,  name: "Route 12"                },
        r15:           {x: 230, y: 88,  w: 8,  h: 8,  name: "Route 15"                },
        cyclingroad:   {x: 195, y: 57,  w: 8,  h: 14, name: "Cycling Road"            },
        r9_r10:        {x: 259, y: 24,  w: 8,  h: 8,  name: "Route 9\nRoute 10"       },

        // Important locations
        darkcave:               {x: 96,  y: 44, w: 8, h: 8,  name: "Dark Cave"                      },
        puzzlechambers:         {x: 58,  y: 42, w: 8, h: 8,  name: "Puzzle Chambers"                },
        unioncave:              {x: 67,  y: 96, w: 8, h: 8,  name: "Union Cave"                     },
        goldenrodstore:         {x: 46,  y: 57, w: 8, h: 8,  name: "Goldenrod\nDepartment Store"    },
        radiotower_underground: {x: 46,  y: 71, w: 8, h: 8,  name: "Radio Tower\nUnderground"       },
        tintower_burnedtower:   {x: 51,  y: 6,  w: 8, h: 8,  name: "Tin Tower\nBurned Tower"        },
        mtmortar_r42:          {x: 67,  y: 16, w: 8, h: 8,  name: "Mt. Mortar Entry\nRoute 42"     },
        mtmortarback:          {x: 67,  y: 8,  w: 8, h: 8,  name: "Mt. Mortar Back"                },
        mtmortarf2:            {x: 62,  y: 0,  w: 8, h: 8,  name: "Mt. Mortar F2"                  },
        mtmortarb1f:           {x: 72,  y: 0,  w: 8, h: 8,  name: "Mt. Mortar B1F"                 },
        lighthouse:             {x: 22,  y: 44, w: 8, h: 8,  name: "Olivine's Lighthouse"           },
        ssaqua:                 {x: 213, y: 66, w: 8, h: 8,  name: "S.S. Aqua"                      },
        whirlislands:           {x: 11,  y: 64, w: 8, h: 8,  name: "Whirl Islands"                  },
        icepath:                {x: 115, y: 6,  w: 8, h: 8,  name: "Ice Path"                       },
        victoryroad_reception:  {x: 155, y: 34, w: 8, h: 14, name: "Victory Road\nLeague Reception" },
        
        mtmoon_r3_r4:           {x: 213, y: 24, w: 8, h: 8, name: "Mt. Moon\nRoute 3 / 4"           },
        mtsilver_r28:           {x: 131, y: 40, w: 8, h: 8, name: "Mt. Silver\nRoute 28"            },
        celadonstore:           {x: 203, y: 31, w: 8, h: 8, name: "Celadon\nDepartment Store"       },
		sabrina:                {x: 236, y: 32, w: 8, h: 8, name: "Sabrina's Gym"                   },
    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        cherrygrove_r29: {
			r29_gate: {x: 423, y: 78, name: "R29 (Cherrygrove)" },
			mart:     {x: 216, y: 80                            },
			center:   {x: 312, y: 36                            },
			house1:   {x: 118, y: 140                           },
			house2:   {x: 247, y: 170                           },
			house3:   {x: 342, y: 202                           },
        },
        violet: {
            sprout:        {x: 383, y: 52  },
			leftmart:      {x: 66,  y: 219 },
			mart:          {x: 154, y: 314 },
			gym:           {x: 298, y: 236 },
			school:        {x: 488, y: 304 },
			center:        {x: 506, y: 368 },
			trade:         {x: 345, y: 442 },
			gate:          {x: 572, y: 441 },
			center_door:   {x: 543, y: 217, name: "Violet City (Center)" },
			center_stairs: {x: 483, y: 164, name: "Violet City (Center)" },

        },
        azalea_well: {
            kurt:      {x: 151, y: 54                             },
			center:    {x: 251, y: 118                            },
			mart:      {x: 346, y: 52                             },
			well:      {x: 502, y: 90                             },
			gym:       {x: 165, y: 210                            },
			charcoal:  {x: 343, y: 187                            },
			gate:      {x: 60,  y: 180                            },
			darkcave:  {x: 440, y: 356, name: "Route 33 (Azalea)" },
			well_up:   {x: 209, y: 450, name: "Slowpoke Well"     },
			well_down: {x: 60,  y: 380, name: "Slowpoke Well"     },
        },
        goldenrod: {
			gate:       {x: 311, y: 53  },
			tunneltop:  {x: 153, y: 62  },
			leftgym:    {x: 246, y: 145 },
			gym:        {x: 393, y: 145 },
			flower:     {x: 473, y: 62  },
			rightgym:   {x: 538, y: 184 },
			radio:      {x: 87,  y: 282 },
			station:    {x: 150, y: 183 },
			gamecorner: {x: 233, y: 315 },
			rightmart:	{x: 501, y: 302 },
			bill:       {x: 89,  y: 381 },
			tunnelbot:  {x: 183, y: 500 },
			center:     {x: 246, y: 412 },
			mart:       {x: 392, y: 412 },
			bike:       {x: 477, y: 500 },
        },
        ecruteak: {
			burned:    {x: 106, y: 34  },
			tin:       {x: 297, y: 151 },
			gateleft:  {x: 66,  y: 264 },
            topgym:    {x: 89,  y: 370 },
			kimono:    {x: 378, y: 305 },
			mart:      {x: 471, y: 370 },
            gym:       {x: 99,  y: 468 },
			rightgym:  {x: 220, y: 410 },
			center:    {x: 379, y: 410 },
			gateright: {x: 571, y: 474 },
        },
        olivine_r40: {
			gym:        {x: 165, y: 145 },
			trade:      {x: 405, y: 147 },
			righttrade: {x: 475, y: 216 },
			leftmart:   {x: 216, y: 224 },
			mart:       {x: 312, y: 305 },
			center:     {x: 216, y: 370 },
			bar:        {x: 120, y: 302 },
			lighthouse: {x: 475, y: 399 },
			battle:     {x: 72,  y: 461 },
			seaport:    {x: 320, y: 423 },
        },
        cianwood: {
			house1: {x: 86,  y: 87  },
			house2: {x: 151, y: 315 },
			house3: {x: 246, y: 409 },
			house4: {x: 279, y: 530 },
			gym:    {x: 384, y: 482 },
			center: {x: 134, y: 490 },
			house5: {x: 247, y: 625 },
        },
        mahogany_r44: {
			gate:      {x: 151, y: 45                              },
			mart:	   {x: 183, y: 131                             },
			rightmart: {x: 280, y: 85                              },
			gym:       {x: 102, y: 183                             },
			center:    {x: 252, y: 251                             },
			icepath:   {x: 432, y: 90, name: "Route44 (Mahogany)" },
        },
        blackthorn: {
			den:         {x: 330, y: 69  },
			gym:         {x: 294, y: 144 },
			icepath:     {x: 583, y: 114 },
			botgym:      {x: 216, y: 319 },
			leftmart:    {x: 148, y: 480 },
			mart:        {x: 247, y: 430 },
			center:      {x: 351, y: 500 },
			rightcenter: {x: 472, y: 354 },

        },
        indigo_e4: {
			center_left:     {x: 40,  y: 490,                        name: "Indigo Plateau"    },
			center_entrance: {x: 132, y: 490,                        name: "Indigo Plateau"    },
			center_top:      {x: 269, y: 376,                        name: "Indigo Plateau"    },
			will_top:        {x: 80,  y: 20,  corridor: "will_bot",  name: "E4 Member (Will)"  },
			will_bot:        {x: 80,  y: 128, corridor: "will_top",  name: "E4 Member (Will)"  },
			koga_top:        {x: 245, y: 20,  corridor: "koga_bot",  name: "E4 Member (Koga)"  },
			koga_bot:        {x: 245, y: 128, corridor: "koga_top",  name: "E4 Member (Koga)"  },
			bruno_top:       {x: 80,  y: 165, corridor: "bruno_bot", name: "E4 Member (Bruno)" },
			bruno_bot:       {x: 80,  y: 279, corridor: "bruno_top", name: "E4 Member (Bruno)" },
			karen_top:       {x: 245, y: 165, corridor: "karen_bot", name: "E4 Member (Karen)" },
			karen_bot:       {x: 245, y: 279, corridor: "karen_top", name: "E4 Member (Karen)" },
        },

        pallet: {
			main:  {x: 88,  y: 50  },
			rival: {x: 221, y: 50  },
			lab:   {x: 197, y: 143 },
        },
        viridian_r22: {
			gate:   {x: 88,  y: 181 },
			gym:    {x: 412, y: 77  },
			house:  {x: 235, y: 127 },
			school: {x: 267, y: 211 },
			mart:   {x: 364, y: 281 },
			centre: {x: 267, y: 371 },
        },
        pewter: {
            gym:    {x: 236, y: 235 },
			mart:   {x: 382, y: 241 },
			top:    {x: 478, y: 176 },
			center: {x: 222, y: 367 },
			bot:    {x: 121, y: 448 },
        },
        cerulean_r5: {
			candy:         {x: 59,  y: 174                                                         },
			robbed:        {x: 393, y: 213                                                         },
			leftcenter:    {x: 151, y: 238                                                         },
			center:        {x: 250, y: 325                                                         },
			gym:           {x: 424, y: 291                                                         },
			mart:          {x: 349, y: 394                                                         },
            daycare:       {x: 265, y: 519                                                         },
			tunnel:        {x: 378, y: 583,                            name: "Cerulean(Underpass)" },
			gate:          {x: 238, y: 621                                                         },
			underpass_top: {x: 494, y: 529, corridor: "underpass_bot", name: "Kanto Underpass"     },
			underpass_bot: {x: 494, y: 610, corridor: "underpass_top", name: "Kanto Underpass"     },
			bill:          {x: 256, y: 44,                             name: "Route 25 (Cerulean)" },
        },
        vermilion_r6: {
			fish:    {x: 72,  y: 149                               },
			center:  {x: 137, y: 208                               },
			club:    {x: 105, y: 273                               },
			trade:   {x: 202, y: 338                               },
			mart:    {x: 331, y: 277                               },
			gym:     {x: 124, y: 371, name: "Vermilion City (Gym)" },
			botmart: {x: 331, y: 402                               },
			seaport: {x: 303, y: 572                               },
			digglet: {x: 528, y: 192, name: "Vermilion (Diglett)"  },
            gate:    {x: 233, y: 46                                },
			tunnel:  {x: 409, y: 19,  name: "Vermilion(Underpass)" },
        },
        celadon_r7: {
			mart:       {x: 62,  y: 119                             },
			tea:        {x: 234, y: 182                             },
			backtea:    {x: 240, y: 22                              },
			center:     {x: 444, y: 123                             },
			gamecorner: {x: 265, y: 285                             },
			prizes:     {x: 353, y: 340                             },
			gym:        {x: 132, y: 442, name: "Celadon City (Gym)" },
			coincase:   {x: 376, y: 498                             },
			gate:       {x: 534, y: 353                             },
        },
        lavender_r8: {
			mart:       {x: 53,  y: 240                             },
			center:     {x: 124, y: 188                             },
			botcenter:  {x: 117, y: 270                             },
			left:       {x: 85,  y: 321                             },
			right:      {x: 160, y: 365                             },
			radio:      {x: 265, y: 188                             },
			botradio:   {x: 260, y: 284                             },
			rocktunnel: {x: 311, y: 82                              },
			gate:       {x: 73,  y: 111, name: "Route 8 (Lavender)" },
        },
        saffron: {
			topgate:   {x: 294, y: 23  },
			rightgate: {x: 572, y: 334 },
			botgate:   {x: 272, y: 510 },
			leftgate:  {x: 66, y: 394  },
			station:   {x: 134, y: 79  },
			dojo:      {x: 421, y: 81  },
			gym:       {x: 550, y: 23  },
			mimic:     {x: 150, y: 151 },
			mart:      {x: 414, y: 150 },
			silph:     {x: 297, y: 320 },
			center:    {x: 152, y: 447 },
			psychic:   {x: 438, y: 447 },
        },
        fuchsia: {
			mart:      {x: 88,  y: 187, name: "Fuchsia City (Mart)" },
			house:     {x: 362, y: 188                              },
			gym:       {x: 134, y: 401                              },
			rightgym:  {x: 186, y: 470                              },
			center:    {x: 318, y: 409                              },
			strength:  {x: 443, y: 466                              },
			rightgate: {x: 572, y: 330                              },
			botgate:   {x: 127, y: 539                              },
			leftgate:  {x: 60,  y: 298                              },
        },
        cinnabar: {
			center: {x: 186, y: 151},
        },

        // Routes
        r45_r46: {
			gate:        {x: 129, y: 385, name: "Route 46 (Gate)" },
			botdarkcave: {x: 233, y: 268, name: "Route 46 (Cave)" },
			topdarkcave: {x: 55,  y: 61,  name: "Route 45"        },
        },
        r30_r31: {
			gate:     {x: 103, y: 133, name: "Route 31" },
			darkcave: {x: 549, y: 56,  name: "Route 31" },
			berry:    {x: 130, y: 357, name: "Route 30" },
			lab:      {x: 570, y: 410, name: "Route 30" },
        },
        alphruins_r32: {
			topgate:   {x: 119, y: 22,  name: "Ruins of Alph (Top)" },
			puzzle:    {x: 231, y: 63,  name: "Ruins of Alph (Top)" },
			house:     {x: 280, y: 127, name: "Ruins of Alph (Top)" },
			unown:     {x: 166, y: 162, name: "Ruins of Alph (Top)" },
			leftgate:  {x: 220, y: 249, name: "Ruins of Alph (Top)" },
			left:      {x: 70,  y: 464, name: "Ruins of Alph (Bot)" },
			top:       {x: 104, y: 375, name: "Ruins of Alph (Bot)" },
			right:     {x: 264, y: 477, name: "Ruins of Alph (Bot)" },
			rightgate: {x: 312, y: 335, name: "Route 32 (Violet)"   },
			center:    {x: 529, y: 249, name: "Route 32"            },
			union:     {x: 443, y: 408, name: "Route 32"            },
        },
        r34_ilex: {
			r34_gate:    {x: 138, y: 420,                        name: "Route 34"        },
			r34_daycare: {x: 86,  y: 40,                         name: "Route 34"        },
			ilext_top:   {x: 264, y: 62,  corridor: "ilext_bot", name: "Ilex Forest"     },
			ilext_bot:   {x: 302, y: 642, corridor: "ilext_top", name: "Ilex Forest"     },
			tm12_top:    {x: 150, y: 559, corridor: "tm12_bot",  name: "Gate R34 (TM12)" },
			tm12_bot:    {x: 152, y: 673, corridor: "tm12_top",  name: "Gate R34 (TM12)" },
        },
        r35_r36: {
			botgate:   {x: 158, y: 452, name: "Route 35"          },
			botpark:   {x: 58,  y: 294, name: "Route 35"          },
			toppark:   {x: 303, y: 54,  name: "Route 36"          },
			topgate:   {x: 486, y: 142, name: "Route 36 (Violet)" },
			kenya_top: {x: 469, y: 379, name: "Gate R35 (Kenya)"  },
			kenya_bot: {x: 474, y: 491, name: "Gate R35 (Kenya)"  },
        },
        r38_r39: {
			gate:  {x: 340, y: 52,  name: "Route 38" },
			farm1: {x: 46,  y: 101, name: "Route 39" },
			farm2: {x: 102, y: 29,  name: "Route 39" },
        },
        r41: {
			topleft:  {x: 185, y: 207, name: "Route 41 (NW)" },
			topright: {x: 568, y: 239, name: "Route 41 (NE)" },
			botleft:  {x: 184, y: 528, name: "Route 41 (SW)" },
			botright: {x: 570, y: 657, name: "Route 41 (SE)" },
        },
        ragelake_r43: {
            cut:      {x: 50,  y: 80,  name: "Lake of Rage"       },
			lake:     {x: 174, y: 37,  name: "Lake of Rage"       },
			entrance: {x: 60,  y: 190, name: "Route 43 (Lake)"    },
			gatebot:  {x: 194, y: 216, name: "Route 43 (Lake)"    },
			gatetop:  {x: 194, y: 126, name: "Route 43 (Lake)"    },
			tm_bot:   {x: 310, y: 219, name: "Gate R43 (Rockets)" },
			tm_top:   {x: 310, y: 140, name: "Gate R43 (Rockets)" },
        },
        r26_r27: {
			left:      {x: 57,  y: 59,  name: "Route 27" },
			right:     {x: 216, y: 60,  name: "Route 27" },
			house1:    {x: 169, y: 144, name: "Route 27" },
			house2:    {x: 356, y: 157, name: "Route 26" },
			house3:    {x: 485, y: 158, name: "Route 26" },
			reception: {x: 421, y: 52,  name: "Route 26" },
        },

        r2: {
            digglet: {x: 200, y: 76  },
			trade:   {x: 248, y: 210 },
			gatetop: {x: 266, y: 401 },
			gatebot: {x: 246, y: 513 },
        },
        r19_r20: {
			gate:   {x: 73, y: 30,  name: "Route 19" },
			blaine: {x: 69, y: 202, name: "Route 20" },
        },
        r25: {
			bill: {x: 139, y: 68 },
        },
        r12: {
			fish: {x: 182, y: 191 },
        },
        r15: {
			gate: {x: 76, y: 77 },
        },
		cyclingroad: {
			top: {x: 125, y: 82,  corridor: "bot"},
			bot: {x: 231, y: 710, corridor: "top"},
        },
        r16_r18: {
			topgate: {x: 240, y: 104, name: "Route 16 (Celadon)" },
			house:   {x: 56,  y: 40,  name: "Route 16"           },
			botgate: {x: 55,  y: 250, name: "Route 18 (Fuchsia)" },
        },
        r9_r10: {
			rocktunnel: {x: 136, y: 66,  name: "Route 9"          },
			center:     {x: 187, y: 141, name: "Route 9"          },
			powerplant: {x: 62,  y: 267, name: "Route 10 (Plant)" },
        },

        // Important locations
        darkcave: {
			r31_left:  {x: 70,  y: 216                                                      },
			r31_top:   {x: 293, y: 32                                                       },
			r31_right: {x: 584, y: 497                                                      },
			r45_left:  {x: 58,  y: 628, corridor: "r45_right", name: "Dark Cave (Corridor)" },
			r45_right: {x: 365, y: 331, corridor: "r45_left",  name: "Dark Cave (Corridor)" },
        },
        puzzlechambers: {
			hooh_top:       {x: 80,  y: 25,  name: "Puzzle (Ho-oh)"      },
			hooh_mid:       {x: 80,  y: 75,  name: "Puzzle (Ho-oh)"      },
			hooh_bot:       {x: 80,  y: 130, name: "Puzzle (Ho-oh)"      },
			kabuto_top:     {x: 250, y: 25,  name: "Puzzle (Kabuto)"     },
			kabuto_mid:     {x: 250, y: 75,  name: "Puzzle (Kabuto)"     },
			kabuto_bot:     {x: 250, y: 130, name: "Puzzle (Kabuto)"     },
			omanyte_top:    {x: 80,  y: 194, name: "Puzzle (Omanyte)"    },
			omanyte_mid:    {x: 80,  y: 248, name: "Puzzle (Omanyte)"    },
			omanyte_bot:    {x: 80,  y: 305, name: "Puzzle (Omanyte)"    },
			aerodactyl_top: {x: 250, y: 194, name: "Puzzle (Aerodactyl)" },
			aerodactyl_mid: {x: 250, y: 248, name: "Puzzle (Aerodactyl)" },
			aerodactyl_bot: {x: 250, y: 305, name: "Puzzle (Aerodactyl)" },
        },
        unioncave: {
            f1_top:   {x: 278, y: 36,  name: "Union Cave (1F)"  },
			f1_mid:   {x: 91,  y: 141, name: "Union Cave (1F)"  },
			f1_right: {x: 279, y: 341, name: "Union Cave (1F)"  },
			f1_left:  {x: 68,  y: 352, name: "Union Cave (1F)"  },
			bf1_top:  {x: 385, y: 95,  name: "Union Cave (B1F)" },
			bf1_mid:  {x: 385, y: 223, name: "Union Cave (B1F)" },
			bf1_bot:  {x: 455, y: 362, name: "Union Cave (B1F)" },
        },
        goldenrodstore: {
			f1_door: {x: 132, y: 380, name: "Goldenrod Store" },
			f1_up:   {x: 252, y: 270, name: "Goldenrod Store" },
			f2_up:   {x: 252, y: 134, name: "Goldenrod Store" },
			f2_down: {x: 204, y: 176, name: "Goldenrod Store" },
			f3_up:   {x: 252, y: -5,  name: "Goldenrod Store" },
			f3_down: {x: 204, y: 40,  name: "Goldenrod Store" },
			f4_up:   {x: 520, y: 270, name: "Goldenrod Store" },
			f4_down: {x: 470, y: 316, name: "Goldenrod Store" },
			f5_up:   {x: 520, y: 134, name: "Goldenrod Store" },
			f5_down: {x: 470, y: 176, name: "Goldenrod Store" },
			f6_up:   {x: 520, y: -5,  name: "Goldenrod Store" },
			f6_down: {x: 470, y: 40,  name: "Goldenrod Store" },
			b1f:     {x: 389, y: 487, name: "Goldenrod Store" },
        },
        radiotower_underground: {
			tunnel_top:      {x: 31,  y: 72,  name: "Underground" },
			tunnel_basement: {x: 264, y: 130, name: "Underground" },
			tunnel_bot:      {x: 31,  y: 188, name: "Underground" },
			radio_left:      {x: 31,  y: 280, name: "Radio Tower" },
			radio_mid:       {x: 130, y: 245, name: "Radio Tower" },
			radio_right:     {x: 264, y: 282, name: "Radio Tower" },
        },
        tintower_burnedtower: {
			burned_entrance: {x: 401, y: 126, name: "Burned Tower"          },
			burned_stairs:   {x: 310, y: 153, name: "Burned Tower"          },

			tinL_left:       {x: 335, y: 192, name: "Tin Tower (L)"         },
			tinL_right:      {x: 370, y: 239, name: "Tin Tower (L)"         },
			tinL_top:        {x: 468, y: 92,  name: "Tin Tower (L)"         },
			tintele_top:     {x: 369, y: 298, name: "Tin Tower (Teleports)" },
			tintele_mid:     {x: 289, y: 391, name: "Tin Tower (Teleports)" },
			tintele_bot:     {x: 397, y: 480, name: "Tin Tower (Teleports)" },
			tinloop_se:      {x: 246, y: 481, name: "Tin Tower (Loop)"      },
			tinloop_ne:      {x: 231, y: 335, name: "Tin Tower (Loop)"      },
			tinloop_nw:      {x: 53,  y: 360, name: "Tin Tower (Loop)"      },
			tinloop_sw:      {x: 53,  y: 469, name: "Tin Tower (Loop)"      },
			tinsquare_mid:   {x: 145, y: 270, name: "Tin Tower (Square)"    },
			tinsquare_left:  {x: 53,  y: 216, name: "Tin Tower (Square)"    },
			tinsquare_top:   {x: 53,  y: 100, name: "Tin Tower (Square)"    },
			tinsquare_right: {x: 243, y: 225, name: "Tin Tower (Square)"    },
        },
        mtmortar_r42: {
			r42_gate:               {x: 70,  y: 616,                                name: "Route 42 (Left)"      },
			r42_cave1:              {x: 169, y: 548,                                name: "Route 42 (Left)"      },
			r42_cave2:              {x: 312, y: 578,                                name: "Route 42 (Middle)"    },
			r42_cave3:              {x: 553, y: 635,                                name: "Route42 (Mahogany)"   },
			mortarwater_door:       {x: 280, y: 516,                                name: "Mortar Entry (Water)" },
			mortarwater_stairs:     {x: 280, y: 384,                                name: "Mortar Entry (Water)" },
			mortarwater_waterfall:  {x: 280, y: 61,                                 name: "Mortar Entry (Water)" },
			mortar1item_door:       {x: 472, y: 257, corridor: "mortar1item_entry", name: "Mortar Entry (1item)" },
			mortar1item_entry:      {x: 570, y: 458, corridor: "mortar1item_door",  name: "Mortar Entry (1item)" },
        },
		mtmortarback: {
			topstairs:   {x: 137, y: 98,  name: "Mortar Back (Top)" },
			midstairs:   {x: 66,  y: 271, name: "Mortar Back (Top)" },
			leftstairs:  {x: 73,  y: 581, name: "Mortar Back (Bot)" },
			leftdoor:    {x: 167, y: 722, name: "Mortar Back (Bot)" },
			rightdoor:   {x: 455, y: 728, name: "Mortar Back (Bot)" },
			rightstairs: {x: 514, y: 609, name: "Mortar Back (Bot)" },
		},
		mtmortarf2: {
			door:   {x: 277, y: 503, corridor: "stairs" },
			stairs: {x: 93,  y: 45,  corridor: "door"   },
		},
        mtmortarb1f: {
			top:    {x: 72,  y: 44,  corridor: "bottom" },
			bottom: {x: 297, y: 493, corridor: "top"    },
		},
        lighthouse: {
			f1_entrance:  {x: 173, y: 840,                         name: "Lighthouse (F1)"  },
			f1_fall:      {x: 270, y: 797,                         name: "Lighthouse (F1)"  },
			f1_stairs:    {x: 60,  y: 748,                         name: "Lighthouse (F1)"  },
			f2_entrance:  {x: 60,  y: 510,                         name: "Lighthouse (F2)"  },
			f2_hole:      {x: 272, y: 546,                         name: "Lighthouse (F2)"  },
			f2_fall:      {x: 270, y: 463,                         name: "Lighthouse (F2)"  },
			f2_stairs:    {x: 84,  y: 327,                         name: "Lighthouse (F2)"  },
			f3_entrance:  {x: 87,  y: 95,                          name: "Lighthouse (F3)"  },
			f3_hole:      {x: 271, y: 209,                         name: "Lighthouse (F3)"  },
			f3_fall:      {x: 270, y: 133,                         name: "Lighthouse (F3)"  },
			f3_stairs:    {x: 215, y: 23,                          name: "Lighthouse (F3)"  },
			f4_entrance:  {x: 344, y: 653,                         name: "Lighthouse (F4)"  },
			f4_hole1:     {x: 594, y: 776,                         name: "Lighthouse (F4)"  },
			f4_fall:      {x: 594, y: 691,                         name: "Lighthouse (F4)"  },
			f4_stairstop: {x: 550, y: 649,                         name: "Lighthouse (F4)"  },
			f4_stairsbot: {x: 454, y: 740,                         name: "Lighthouse (F4)"  },
			f4_stairsmid: {x: 454, y: 692,                         name: "Lighthouse (F4)"  },
			f4_hole2:     {x: 454, y: 613,                         name: "Lighthouse (F4)"  },
			f5_hole:      {x: 594, y: 450,                         name: "Lighthouse (F5)"  },
			f5_fall:      {x: 594, y: 368,                         name: "Lighthouse (F5)"  },
			f5_stairs:    {x: 384, y: 342,                         name: "Lighthouse (F5)"  },
			top_stairs:   {x: 482, y: 221, corridor: "top_hole",   name: "Lighthouse (Top)" },
			top_hole:     {x: 592, y: 53,  corridor: "top_stairs", name: "Lighthouse (Top)" },
        },
        ssaqua: {
			entrance: {x: 250, y: 52  },
			top1:     {x: 85,  y: 121 },
			top2:     {x: 152, y: 155 },
			top3:     {x: 213, y: 121 },
			top4:     {x: 280, y: 155 },
			stairs:   {x: 315, y: 203 },
			bot1:     {x: 85,  y: 231 },
			bot2:     {x: 152, y: 263 },
			bot3:     {x: 213, y: 231 },
			bot4:     {x: 280, y: 263 },
        },
        whirlislands: {
			waterfall_top:           {x: 118, y: 37,                          name: "Whirl (Waterfall)"     },
			waterfall_cave:          {x: 70,  y: 358,                         name: "Whirl (Waterfall)"     },
			waterfall_bot:           {x: 151, y: 454,                         name: "Whirl (Waterfall)"     },
			lake_left:               {x: 128, y: 555,                         name: "Whirl (Lake Left)"     },
			lake_right:              {x: 353, y: 555,                         name: "Whirl (Lake Right)"    },
			lake_entrance:           {x: 162, y: 692,                         name: "Whirl (Lake Left)"     },
			surf_left:               {x: 129, y: 805, corridor: "surf_right", name: "Whirl (Surf Corridor)" },
			surf_right:              {x: 355, y: 805, corridor: "surf_left",  name: "Whirl (Surf Corridor)" },
			ledges_entrance:         {x: 456, y: 724,                         name: "Whirl (Ledges)"        },
			ledges_bot:              {x: 615, y: 683,                         name: "Whirl (Ledges 🚫)"     },
			ledges_top:              {x: 681, y: 555,                         name: "Whirl (Ledges 🚫)"     },
			main_topright:           {x: 632, y: 100,                         name: "Whirl (Hub)"           },
			main_topleft:            {x: 249, y: 98,                          name: "Whirl (Hub)"           },
			main_mid:                {x: 376, y: 391,                         name: "Whirl (Hub)"           },
			main_cave:               {x: 442, y: 292,                         name: "Whirl (Hub)"           },
			main_botleft:            {x: 312, y: 452,                         name: "Whirl (Hub)"           },
			main_botmid:             {x: 536, y: 455,                         name: "Whirl (Hub)"           },
			main_botright:           {x: 664, y: 422,                         name: "Whirl (Hub)"           },
        },
		icepath: {
			stairsleft:      {x: 186, y: 273, name: "Ice Path (Holes)"     },
			holebotleft:     {x: 217, y: 223, name: "Ice Path (Holes)"     },
			holebotright:    {x: 332, y: 185, name: "Ice Path (Holes)"     },
			holetopleft:     {x: 201, y: 93,  name: "Ice Path (Holes)"     },
			holetopright:    {x: 314, y: 15,  name: "Ice Path (Holes)"     },
			stairsup:        {x: 410, y: 82,  name: "Ice Path (Holes)"     },
			waterfall_left:  {x: 61,  y: 575, name: "Ice Path (Waterfall)" },
			waterfall_right: {x: 536, y: 342, name: "Ice Path (Waterfall)" },
		},
        victoryroad_reception: {
			reception_bot:   {x: 484, y: 580, name: "League Reception"  },
			reception_left:  {x: 358, y: 420, name: "League Reception"  },
			reception_right: {x: 580, y: 420, name: "League Reception"  },
			reception_top:   {x: 484, y: 364, name: "League Reception"  },
			roadf1_bot:      {x: 151, y: 574, name: "Victory Road (1F)" },
			roadf1_top:      {x: 67,  y: 332, name: "Victory Road (1F)" },
			roadf2_left:     {x: 66,  y: 211, name: "Victory Road (2F)" },
			roadf2_mid:      {x: 215, y: 70,  name: "Victory Road (2F)" },
			roadf2_right:    {x: 282, y: 178, name: "Victory Road (2F)" },
			roadf2_fall:     {x: 66,  y: 52,  name: "Victory Road (2F)" },
			roadf3_hole:     {x: 346, y: 89,  name: "Victory Road (3F)" },
			roadf3_mid:      {x: 539, y: 172, name: "Victory Road (3F)" },
			roadf3_bot:      {x: 579, y: 280, name: "Victory Road (3F)" },
			roadf3_top:      {x: 541, y: 49,  name: "Victory Road (3F)" },
        },

        mtmoon_r3_r4: {
			r3:                 {x: 129, y: 330, name: "Route 3"           },
			r4:                 {x: 301, y: 390, name: "Route 4"           },
			mooncave_stairstop: {x: 186, y: 11,  name: "Mt. Moon (Cave)"   },
			mooncave_doortop:   {x: 50,  y: 26,  name: "Mt. Moon (Cave)"   },
			mooncave_stairsbot: {x: 220, y: 140, name: "Mt. Moon (Cave)"   },
			mooncave_doorbot:   {x: 218, y: 222, name: "Mt. Moon (Cave)"   },
			moonsquare_house:   {x: 282, y: 66,  name: "Mt. Moon (Square)" },
			moonsquare_top:     {x: 396, y: 44,  name: "Mt. Moon (Square)" },
			moonsquare_bot:     {x: 423, y: 147, name: "Mt. Moon (Square)" },
        },
        mtsilver_r28: {
			r28_gate:    {x: 452, y: 332, name: "Route 28"   },
			r28_house:   {x: 326, y: 227, name: "Route 28"   },
			r28_center:  {x: 417, y: 120, name: "Route 28"   },
			r28_silver:  {x: 332, y: 65,  name: "Route 28"   },
			mt_entrance: {x: 145, y: 337, name: "Mt. Silver" },
			mt_left:     {x: 83,  y: 226, name: "Mt. Silver" },
			mt_right:    {x: 203, y: 21,  name: "Mt. Silver" },
			mt_exit:     {x: 55,  y: 80,  name: "Mt. Silver" },
        },
		celadonstore: {
            f1_door: {x: 132, y: 380, name: "Celadon Store" },
			f1_up:   {x: 252, y: 270, name: "Celadon Store" },
			f2_up:   {x: 252, y: 134, name: "Celadon Store" },
			f2_down: {x: 204, y: 176, name: "Celadon Store" },
			f3_up:   {x: 252, y: -5,  name: "Celadon Store" },
			f3_down: {x: 204, y: 40,  name: "Celadon Store" },
			f4_up:   {x: 520, y: 270, name: "Celadon Store" },
			f4_down: {x: 470, y: 316, name: "Celadon Store" },
			f5_up:   {x: 520, y: 134, name: "Celadon Store" },
			f5_down: {x: 470, y: 176, name: "Celadon Store" },
			f6_up:   {x: 520, y: -5,  name: "Celadon Store" },
        },

		sabrina: {
			nw_nw: {x: 33,  y: 44,  name: "Sabrina's Gym (NW)" },
			nw_ne: {x: 95,  y: 62,  name: "Sabrina's Gym (NW)" },
			nw_sw: {x: 33,  y: 79,  name: "Sabrina's Gym (NW)" },
			nw_se: {x: 95,  y: 95,  name: "Sabrina's Gym (NW)" },

			n_nw:  {x: 151, y: 44,  name: "Sabrina's Gym (N)"  },
			n_ne:  {x: 184, y: 62,  name: "Sabrina's Gym (N)"  },
			n_sw:  {x: 151, y: 79,  name: "Sabrina's Gym (N)"  },
			n_se:  {x: 184, y: 95,  name: "Sabrina's Gym (N)"  },

			ne_nw: {x: 240, y: 44,  name: "Sabrina's Gym (NE)" },
			ne_ne: {x: 302, y: 62,  name: "Sabrina's Gym (NE)" },
			ne_sw: {x: 240, y: 79,  name: "Sabrina's Gym (NE)" },
			ne_se: {x: 302, y: 95,  name: "Sabrina's Gym (NE)" },

			w_nw:  {x: 33,  y: 140, name: "Sabrina's Gym (W)"  },
			w_ne:  {x: 95,  y: 157, name: "Sabrina's Gym (W)"  },
			w_sw:  {x: 33,  y: 174, name: "Sabrina's Gym (W)"  },
			w_se:  {x: 95,  y: 191, name: "Sabrina's Gym (W)"  },

			e_nw:  {x: 240, y: 140, name: "Sabrina's Gym (E)"  },
			e_ne:  {x: 302, y: 157, name: "Sabrina's Gym (E)"  },
			e_sw:  {x: 240, y: 174, name: "Sabrina's Gym (E)"  },
			e_se:  {x: 302, y: 191, name: "Sabrina's Gym (E)"  },

			sw_nw: {x: 33,  y: 236, name: "Sabrina's Gym (SW)" },
			sw_ne: {x: 95,  y: 253, name: "Sabrina's Gym (SW)" },
			sw_sw: {x: 33,  y: 270, name: "Sabrina's Gym (SW)" },
			sw_se: {x: 95,  y: 287, name: "Sabrina's Gym (SW)" },

			se_nw: {x: 240, y: 236, name: "Sabrina's Gym (SE)" },
			se_ne: {x: 302, y: 253, name: "Sabrina's Gym (SE)" },
			se_sw: {x: 240, y: 270, name: "Sabrina's Gym (SE)" },
			se_se: {x: 302, y: 287, name: "Sabrina's Gym (SE)" },
		},
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown",     0], ["corridor",    0], ["dead_end", null], ["event",      0], ["center",      0], ["mart",        0], ["one_way",   null]],
        [["normal",      0], ["fighting",    0], ["flying",     0], ["poison",      0], ["ground",      0], ["rock",         0], ["bug",    0], ["ghost",       0], ["fairy",     0]],
        [["steel",       0], ["fire",        0], ["water",      0], ["grass",       0], ["electric",    0], ["psychic",      0], ["ice",    0], ["dragon",      0], ["dark",      0]],
        [["1",           0], ["2",           0], ["3",          0], ["4",           0], ["5",           0], ["6",            0], ["7",      0], ["8",           0]],
		[["team_rocket", 0], ["c_rival",     0], ["c_gyarados", 0], ["",    undefined], ["c_legendary", 0], ["burned_tower", 0], ["c_oak",  0], ["c_kurt",      0], ["c_unown",   0], ["c_train",   0], ["dratini", 0]],
        [["c_bush",      0], ["c_surf",      0], ["c_boulder",  0], ["c_darkness",  0], ["c_whirlpool", 0], ["c_waterfall",  0], ["c_rock", 0], ["bike_needed", 0], ["c_trainer", 0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",    0], ["plain_badge",    0], ["fog_badge",     0], ["storm_badge",   0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge", 0], ["thunder_badge",  0], ["rainbow_badge", 0], ["soul_badge",    0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["c_will",        0], ["c_koga",        0], ["c_bruno",        0], ["c_karen",       0], ["c_lance",       0], ["",      undefined], ["",      undefined], ["c_red",        0]],
        [["hm_cut",        0], ["hm_fly",        0], ["hm_surf",        0], ["hm_strength",   0], ["hm_flash",      0], ["hm_whirlpool",  0], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["pokegear",      0], ["radio_card",    0], ["expansion_card", 0], ["squirt_bottle", 0], ["secret_potion", 0], ["card_key",      0], ["ss_ticket",     0], ["pass",         0]],
        [["machine_part",  0], ["clear_bell",    0], ["rainbow_wing",   0], ["silver_wing",   0], ["basement_key",  0], ["lost_item",     0], ["red_scale",     0], ["mystery_egg",  0]],
        [["pokedex",       0], ["bike",          0], ["blue_card",      0], ["coin_case",     0], ["itemfinder",    0], ["old_rod",       0], ["good_rod",      0], ["super_rod",    0]],
    ],
	modifiers: [
		[["#ce4069", 0], ["#ff9c54", 0], ["#f3d23b", 0], ["#743683", 0], ["#654321", 0], ["#014f01", 0]],
		[["#4d90d5", 0], ["#74cec0", 0], ["#90c12c", 0], ["#ec8fe6", 0], ["#5a5366", 0], ["#00146b", 0]],
	],
};