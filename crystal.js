var crystal = {
    name: "crystal",
    start_location: "cherrygrove",
    font: "GameBoy_Font",
    font_size: "22px",
    locations: {
        // Cities
        cherrygrove:   {x: 83,  y: 72, w: 8, h: 8, name: "Cherrygrove City"        },
        violet:        {x: 67,  y: 32, w: 8, h: 8, name: "Violet City"             },
        azalea_r33:    {x: 51,  y: 96, w: 8, h: 8, name: "Azalea Town\nRoute 33"   },
        goldenrod:     {x: 35,  y: 64, w: 8, h: 8, name: "Goldenrod City"          },
        ecruteak:      {x: 51,  y: 16, w: 8, h: 8, name: "Ecruteak City"           },
        olivine_r40:   {x: 19,  y: 32, w: 8, h: 8, name: "Olivine City\nRoute 40"  },
        cianwood:      {x: 3,   y: 72, w: 8, h: 8, name: "Cianwood City"           },
        mahogany_r44:  {x: 91,  y: 16, w: 8, h: 8, name: "Mahogany Town\nRoute 44" },
        blackthorn:    {x: 115, y: 16, w: 8, h: 8, name: "Blackthorn City"         },
        indigoplateau: {x: 155, y: 8,  w: 8, h: 8, name: "Indigo Plateau"          },

        pallet:        {x: 179, y: 80,  w: 8, h: 8, name: "Pallet Town"              },
        viridian_r22:  {x: 179, y: 48,  w: 8, h: 8, name: "Viridian City\nRoute 22"  },
        pewter:        {x: 179, y: 24,  w: 8, h: 8, name: "Pewter City"              },
        cerulean_r5:   {x: 227, y: 24,  w: 8, h: 8, name: "Cerulean City\nRoute 5"   },
        vermillion_r6: {x: 227, y: 56,  w: 8, h: 8, name: "Vermillion City\nRoute 6" },
        celadon_r7:    {x: 203, y: 40,  w: 8, h: 8, name: "Celadon City\nRoute 7"    },
        lavender_r8:   {x: 259, y: 40,  w: 8, h: 8, name: "Lavender Town\nRoute 8"   },
        saffron:       {x: 227, y: 40,  w: 8, h: 8, name: "Saffron City"             },
        fuchsia:       {x: 219, y: 88,  w: 8, h: 8, name: "Fuchsia City"             },
        cinnabar:      {x: 179, y: 104, w: 8, h: 8, name: "Cinnabar Island"          },
        
        // Routes
        r29_r45_r46:   {x: 107, y: 48,  w: 8,  h: 14, name: "Route 29\nRoute 45 / 46" },
        r30_r31:       {x: 83,  y: 44,  w: 8,  h: 14, name: "Route 30\nRoute 31"      },
        alphruins_r32: {x: 67,  y: 67,  w: 8,  h: 14, name: "Ruins of Alph\nRoute 32" },
        r34:           {x: 35,  y: 81,  w: 8,  h: 8,  name: "Route 34"                },
        r35_r36:       {x: 35,  y: 32,  w: 14, h: 8,  name: "Route 35\nRoute 36"      },
        r38_r39:       {x: 26,  y: 16,  w: 8,  h: 8,  name: "Route 38\nRoute 39"      },
        r41:           {x: 11,  y: 52,  w: 8,  h: 8,  name: "Route 41"                },
        ragelake_r43:  {x: 91,  y: 0,   w: 8,  h: 8,  name: "Lake of Rage\nRoute 43"  },
        r26_r27:       {x: 149, y: 66,  w: 14, h: 14, name: "Route 26\nRoute 27"      },
        
        r2:            {x: 179, y: 36,  w: 8,  h: 8,  name: "Route 2"                 },
        r19_r20:       {x: 195, y: 104, w: 8,  h: 8,  name: "Route 19\nRoute 20"      },
        r25:           {x: 243, y: 8,   w: 8,  h: 8,  name: "Route 25"                },
        r12:           {x: 259, y: 56,  w: 8,  h: 8,  name: "Route 12"                },
        r15:           {x: 230, y: 88,  w: 8,  h: 8,  name: "Route 15"                },
        r16_r18:       {x: 195, y: 57,  w: 8,  h: 14, name: "Route 16\nRoute 18"      },
        r9_r10:        {x: 259, y: 24,  w: 8,  h: 8,  name: "Route 9\nRoute 10"       },

        // Important locations
        darkcave:               {x: 96,  y: 44, w: 8, h: 8,  name: "Dark Cave"                      },
        puzzlechambers:         {x: 58,  y: 42, w: 8, h: 8,  name: "Puzzle Chambers"                },
        unioncave:              {x: 67,  y: 96, w: 8, h: 8,  name: "Union Cave"                     },
        departmentstore:        {x: 46,  y: 57, w: 8, h: 8,  name: "Department Store"               },
        radiotower_underground: {x: 46,  y: 71, w: 8, h: 8,  name: "Radio Tower\nUnderground"       },
        tintower_burnedtower:   {x: 51,  y: 6,  w: 8, h: 8,  name: "Tin Tower\nBurned Tower"        },
        mtmortar_r42:           {x: 67,  y: 16, w: 8, h: 8,  name: "Mt. Mortar\nRoute 42"           },
        lighthouse:             {x: 22,  y: 44, w: 8, h: 8,  name: "Olivine's Lighthouse"           },
        ssaqua:                 {x: 213, y: 66, w: 8, h: 8,  name: "S.S. Aqua"                      },
        whirlislands:           {x: 11,  y: 64, w: 8, h: 8,  name: "Whirl Islands"                  },
        victoryroad_reception:  {x: 155, y: 34, w: 8, h: 14, name: "Victory Road\nLeague Reception" },
        
        mtmoon_r3_r4:           {x: 203, y: 24, w: 8, h: 8, name: "Mt. Moon\nRoute 3 / 4"           },
        mtsilver_r28:           {x: 131, y: 40, w: 8, h: 8, name: "Mt. Silver\nRoute 28"            },

    },

    // Undefined fields:
    // - link_type:     "warp"        / "mark"
    // - link:          warp_name     / mark_name
    // - link_location: location_name / <garbage>
    warps: {
        // Cities
        cherrygrove: {
            mart:   {x: 474, y: 22  },
			center: {x: 377, y: 84  },
			house1: {x: 280, y: 142 },
			house2: {x: 409, y: 177 },
			house3: {x: 504, y: 215 },
        },
        violet: {
            sprout:   {x: 383, y: 52  },
			leftmart: {x: 54,  y: 219 },
			mart:     {x: 154, y: 314 },
			gym:      {x: 298, y: 236 },
			school:   {x: 489, y: 249 },
			center:   {x: 506, y: 368 },
			trade:    {x: 345, y: 442 },
			gate:     {x: 588, y: 441 },

        },
        azalea_r33: {
            kurt:     {x: 151, y: 54                             },
			center:   {x: 251, y: 118                            },
			mart:     {x: 346, y: 52                             },
			well:     {x: 502, y: 90                             },
			gym:      {x: 165, y: 210                            },
			charcoal: {x: 343, y: 187                            },
			gate:     {x: 60,  y: 184                            },
			darkcave: {x: 307, y: 363, name: "Route 33 (Azalea)" },
        },
        goldenrod: {
			gate:       {x: 351, y: 31  },
			tunneltop:  {x: 153, y: 61  },
			leftgym:    {x: 246, y: 145 },
			gym:        {x: 393, y: 78  },
			flower:     {x: 473, y: 42  },
			rightgym:   {x: 538, y: 184 },
			radio:      {x: 87,  y: 282 },
			station:    {x: 150, y: 183 },
			gamecorner: {x: 233, y: 315 },
			rightmart:  {x: 507, y: 373 },
			bill:       {x: 89,  y: 381 },
			tunnelbot:  {x: 183, y: 506 },
			center:     {x: 246, y: 413 },
			mart:       {x: 392, y: 412 },
			bike:       {x: 477, y: 445 },
        },
        ecruteak: {
			burned:    {x: 106, y: 34  },
			tin:       {x: 297, y: 151 },
			gateleft:  {x: 46,  y: 264 },
            topgym:    {x: 89,  y: 315 },
			kimono:    {x: 378, y: 305 },
			mart:      {x: 471, y: 370 },
            gym:       {x: 99,  y: 395 },
			rightgym:  {x: 220, y: 468 },
			center:    {x: 379, y: 399 },
			gateright: {x: 571, y: 474 },
        },
        olivine_r40: {
			gym:        {x: 165, y: 145 },
			trade:      {x: 405, y: 147 },
			righttrade: {x: 475, y: 216 },
			leftmart:   {x: 215, y: 224 },
			mart:       {x: 312, y: 309 },
			center:     {x: 219, y: 374 },
			bar:        {x: 120, y: 302 },
			lighthouse: {x: 475, y: 399 },
			seaport:    {x: 318, y: 475 },
			battle:     {x: 72,  y: 461 },
        },
        cianwood: {
			house1: {x: 86,  y: 87  },
			house2: {x: 151, y: 315 },
			house3: {x: 246, y: 409 },
			house4: {x: 279, y: 538 },
			gym:    {x: 384, y: 482 },
			center: {x: 134, y: 490 },
			house5: {x: 247, y: 635 },
        },
        mahogany_r44: {
			gate:      {x: 151, y: 52                              },
			mart:      {x: 183, y: 147                             },
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
			center:      {x: 351, y: 504 },
			rightcenter: {x: 472, y: 354 },

        },
        indigoplateau: {
			stairs:   {x: 26,  y: 184 },
			entrance: {x: 93,  y: 250 },
			exit:     {x: 232, y: 89  },
        },

        pallet: {
			main:  {x: 88,  y: 56  },
			rival: {x: 221, y: 111 },
			lab:   {x: 198, y: 222 },

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
			candy:      {x: 59,  y: 27  },
			robbed:     {x: 393, y: 66  },
			leftcenter: {x: 151, y: 91  },
			center:     {x: 250, y: 178 },
			gym:        {x: 424, y: 144 },
			bike:       {x: 160, y: 245 },
			mart:       {x: 349, y: 247 },
            daycare:    {x: 265, y: 372 },
			tunnel:     {x: 378, y: 436 },
			gate:       {x: 238, y: 474 },
        },
        vermillion_r6: {
			fish:    {x: 72,  y: 149                              },
			center:  {x: 137, y: 208                              },
			club:    {x: 105, y: 273                              },
			trade:   {x: 202, y: 338                              },
			mart:    {x: 331, y: 277                              },
			gym:     {x: 124, y: 371                              },
			botmart: {x: 331, y: 402                              },
			seaport: {x: 303, y: 572                              },
			digglet: {x: 534, y: 191                              },
            gate:    {x: 233, y: 46, name: "Route 6 (Vermillion)" },
			tunnel:  {x: 409, y: 19, name: "Route 6 (Vermillion)" },

        },
        celadon_r7: {
			mart:       {x: 40,  y: 119 },
			tea:        {x: 234, y: 182 },
			backtea:    {x: 240, y: 22  },
			center:     {x: 444, y: 123 },
			gamecorner: {x: 265, y: 285 },
			prizes:     {x: 353, y: 340 },
			gym:        {x: 132, y: 442 },
			coincase:   {x: 376, y: 498 },
			gate:       {x: 534, y: 353 },
			tunnel:     {x: 538, y: 485 },
        },
        lavender_r8: {
			mart:       {x: 53,  y: 240 },
			center:     {x: 124, y: 188 },
			botcenter:  {x: 117, y: 270 },
			left:       {x: 85,  y: 321 },
			right:      {x: 160, y: 377 },
			radio:      {x: 265, y: 188 },
			botradio:   {x: 260, y: 284 },
			rocktunnel: {x: 311, y: 82  },
			tunnel:     {x: 171, y: 46,  name:"Route 8 (Lavender)" },
			gate:       {x: 73,  y: 111, name:"Route 8 (Lavender)" },
        },
        saffron: {
			topgate:   {x: 294, y: 23  },
			rightgate: {x: 597, y: 334 },
			botgate:   {x: 272, y: 510 },
			leftgate:  {x: 39, y: 394  },
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
			mart:      {x: 88,  y: 187 },
			house:     {x: 362, y: 188 },
			gym:       {x: 134, y: 401 },
			rightgym:  {x: 186, y: 476 },
			center:    {x: 318, y: 409 },
			strength:  {x: 443, y: 415 },
			rightgate: {x: 580, y: 330 },
			botgate:   {x: 127, y: 539 },
        },
        cinnabar: {
			center: {x: 186, y: 151},
        },

        // Routes
        r29_r45_r46: {
            botgate:     {x: 118, y: 496, name: "Route 29 (Bottom)" },
			topgate:     {x: 127, y: 374, name: "Route 29 (Top)"    },
			botdarkcave: {x: 233, y: 268, name: "Route 45"          },
			topdarkcave: {x: 55,  y: 61,  name: "Route 46"          },
        },
        r30_r31: {
			gate:     {x: 103, y: 133, name: "Route 31" },
			darkcave: {x: 549, y: 56,  name: "Route 31" },
			berry:    {x: 130, y: 357, name: "Route 30" },
			lab:      {x: 593, y: 432, name: "Route 30" },
        },
        alphruins_r32: {
			topgate:   {x: 119, y: 22,  name: "Ruins of Alph (Top)" },
			puzzle:    {x: 231, y: 63,  name: "Ruins of Alph (Top)" },
			house:     {x: 280, y: 127, name: "Ruins of Alph (Top)" },
			unown:     {x: 166, y: 162, name: "Ruins of Alph (Top)" },
			leftgate:  {x: 220, y: 249, name: "Ruins of Alph (Top)" },
			left:      {x: 40,  y: 412, name: "Ruins of Alph (Bot)" },
			top:       {x: 104, y: 375, name: "Ruins of Alph (Bot)" },
			right:     {x: 264, y: 477, name: "Ruins of Alph (Bot)" },
			rightgate: {x: 312, y: 335, name: "Route 32"            },
			center:    {x: 529, y: 249, name: "Route 32"            },
			union:     {x: 443, y: 349, name: "Route 32"            },
        },
        r34: {
			daycare: {x: 200, y: 69  },
			gate:    {x: 221, y: 442 },
        },
        r35_r36: {
			botgate: {x: 158, y: 452, name: "Route 35"          },
			botpark: {x: 56,  y: 294, name: "Route 35"          },
			toppark: {x: 303, y: 54,  name: "Route 36"          },
			topgate: {x: 486, y: 142, name: "Route 36 (Violet)" },
        },
        r38_r39: {
			gate:  {x: 340, y: 52,  name: "Route 38" },
			farm1: {x: 46,  y: 101, name: "Route 39" },
			farm2: {x: 102, y: 29,  name: "Route 39" },
        },
        r41: {
			topleft:  {x: 140, y: 167 },
			topright: {x: 404, y: 192 },
			botleft:  {x: 139, y: 391 },
			botright: {x: 405, y: 484 },
        },
        ragelake_r43: {
            cut:      {x: 50,  y: 88,  name: "Lake of Rage"    },
			lake:     {x: 174, y: 29,  name: "Lake of Rage"    },
			entrance: {x: 54,  y: 178, name: "Route 43 (Lake)" },
			gatebot:  {x: 184, y: 237, name: "Route 43 (Lake)" },
			gatetop:  {x: 191, y: 116, name: "Route 43 (Lake)" },
        },
        r26_r27: {
			left:      {x: 55,  y: 59,  name: "Route 26" },
			right:     {x: 216, y: 60,  name: "Route 26" },
			house1:    {x: 169, y: 144, name: "Route 26" },
			house2:    {x: 356, y: 157, name: "Route 27" },
			house3:    {x: 494, y: 158, name: "Route 27" },
			reception: {x: 421, y: 52,  name: "Route 27" },
        },

        r2: {
            digglet: {x: 200, y: 76  },
			trade:   {x: 248, y: 210 },
			gatetop: {x: 266, y: 401 },
			gatebot: {x: 246, y: 463 },
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
        r16_r18: {
			topgate: {x: 240, y: 104, name: "Route 16 (Cerulean)" },
			house:   {x: 56,  y: 40,  name: "Route 16"            },
			botgate: {x: 55,  y: 250, name: "Route 18 (Fuchsia)"  },
        },
        r9_r10: {
			rocktunnel: {x: 136, y: 66,  name: "Route 9"          },
			center:     {x: 187, y: 141, name: "Route 9"          },
			powerplant: {x: 62,  y: 267, name: "Route 10 (Plant)" },
        },

        // Important locations
        darkcave: {
			left:  {x: 113, y: 217 },
			top:   {x: 280, y: 49  },
			right: {x: 571, y: 506 },
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
			f1_right: {x: 279, y: 341, name: "Union Cave (1F)"  },
			f1_left:  {x: 54,  y: 352, name: "Union Cave (1F)"  },
			bf1_top:  {x: 385, y: 95,  name: "Union Cave (B1F)" },
			bf1_mid:  {x: 385, y: 223, name: "Union Cave (B1F)" },
			bf1_bot:  {x: 455, y: 362, name: "Union Cave (B1F)" },
        },
        departmentstore: {
            f1_door: {x: 136, y: 382 },
			f1_up:   {x: 260, y: 322 },
			f2_up:   {x: 209, y: 125 },
			f2_down: {x: 260, y: 184 },
			f3_up:   {x: 209, y: 27  },
			f3_down: {x: 258, y: 53  },
			f4_up:   {x: 475, y: 266 },
			f4_down: {x: 523, y: 319 },
			f5_up:   {x: 477, y: 127 },
			f5_down: {x: 524, y: 177 },
			f6_up:   {x: 492, y: 16  },
			f6_down: {x: 524, y: 39  },
			b1f:     {x: 386, y: 445 },
        },
        radiotower_underground: {
			tunnel_top:      {x: 30,  y: 72,  name: "Underground" },
			tunnel_basement: {x: 282, y: 141, name: "Underground" },
			tunnel_bot:      {x: 30,  y: 188, name: "Underground" },
			radio_left:      {x: 30,  y: 310, name: "Radio Tower" },
			radio_mid:       {x: 128, y: 233, name: "Radio Tower" },
			radio_right:     {x: 290, y: 302, name: "Radio Tower" },
        },
        tintower_burnedtower: {
			burned_fall:                                 {x: 387, y: 20},
			burned_entrance:                                 {x: 401, y: 128},
			burned_stairs:                                 {x: 319, y: 171},
			aaaa0:                                 {x: 335, y: 198},
			aaaa1:                                 {x: 370, y: 239},
			aaaa2:                                 {x: 494, y: 92},
			aaaa3:                                 {x: 369, y: 298},
			aaaa4:                                 {x: 289, y: 391},
			aaaa5:                                 {x: 397, y: 480},
			aaaa6:                                 {x: 246, y: 481},
			aaaa7:                                 {x: 231, y: 335},
			aaaa8:                                 {x: 14, y: 302},
			aaaa9:                                 {x: 11, y: 469},
			aaaa10:                                 {x: 149, y: 216},
			aaaa11:                                 {x: 24, y: 202},
			aaaa12:                                 {x: 21, y: 39},
			aaaa13:                                 {x: 243, y: 216},
        },
        mtmortar_r42: {
			r42_gate:               {x: 56,  y: 765, name: "Route 42"            },
			r42_cave1:              {x: 168, y: 678, name: "Route 42"            },
			r42_cave2:              {x: 313, y: 719, name: "Route 42"            },
			r42_cave3:              {x: 550, y: 698, name: "Route42 (Mahogany)" },
			mortarmain_topstairs:   {x: 147, y: 119, name: "Mt. Mortar (Main)"   },
			mortarmain_midstairs:   {x: 54,  y: 278, name: "Mt. Mortar (Main)"   },
			mortarmain_leftstairs:  {x: 84,  y: 436, name: "Mt. Mortar (Main)"   },
			mortarmain_leftdoor:    {x: 182, y: 583, name: "Mt. Mortar (Main)"   },
			mortarmain_rightdoor:   {x: 465, y: 571, name: "Mt. Mortar (Main)"   },
			mortarmain_rightstairs: {x: 536, y: 467, name: "Mt. Mortar (Main)"   },
			mortarwater_door:       {x: 487, y: 329, name: "Mt. Mortar (Water)"  },
			mortarwater_stairs:     {x: 484, y: 183, name: "Mt. Mortar (Water)"  },
			mortarwater_waterfall:  {x: 482, y: 51,  name: "Mt. Mortar (Water)"  },
        },
        lighthouse: {
			f1_entrance:  {x: 173, y: 827, name: "Lighthouse (F1)"       },
			f1_fall:      {x: 270, y: 797, name: "Lighthouse (F1)"       },
			f1_stairs:    {x: 55,  y: 748, name: "Lighthouse (F1)"       },
			f2_entrance:  {x: 56,  y: 510, name: "Lighthouse (F2)"       },
			f2_hole:      {x: 272, y: 546, name: "Lighthouse (F2)"       },
			f2_fall:      {x: 270, y: 463, name: "Lighthouse (F2)"       },
			f2_stairs:    {x: 84,  y: 327, name: "Lighthouse (F2)"       },
			f3_entrance:  {x: 87,  y: 95,  name: "Lighthouse (F3)"       },
			f3_hole:      {x: 271, y: 209, name: "Lighthouse (F3)"       },
			f3_fall:      {x: 270, y: 133, name: "Lighthouse (F3)"       },
			f3_stairs:    {x: 215, y: 23,  name: "Lighthouse (F3)"       },
			f4_entrance:  {x: 344, y: 653, name: "Lighthouse (F4)"       },
			f4_hole1:     {x: 611, y: 776, name: "Lighthouse (F4)"       },
			f4_fall:      {x: 605, y: 691, name: "Lighthouse (F4)"       },
			f4_stairstop: {x: 550, y: 649, name: "Lighthouse (F4)"       },
			f4_stairsbot: {x: 456, y: 740, name: "Lighthouse (F4)"       },
			f4_stairsmid: {x: 457, y: 692, name: "Lighthouse (F4)"       },
			f4_hole2:     {x: 455, y: 613, name: "Lighthouse (F4)"       },
			f5_hole:      {x: 607, y: 450, name: "Lighthouse (F5 outer)" },
			f5_fall:      {x: 606, y: 368, name: "Lighthouse (F5 outer)" },
			f5_stairstop: {x: 384, y: 342, name: "Lighthouse (F5 outer)" },
			f5_stairsmid: {x: 484, y: 442, name: "Lighthouse (F5 inner)" },
			f5_stairsbot: {x: 483, y: 518, name: "Lighthouse (F5 inner)" },
        },
        ssaqua: {
			entrance: {x: 250, y: 52  },
			top1:     {x: 86,  y: 106 },
			top2:     {x: 152, y: 167 },
			top3:     {x: 213, y: 105 },
			top4:     {x: 282, y: 163 },
			stairs:   {x: 327, y: 203 },
			bot1:     {x: 84,  y: 212 },
			bot2:     {x: 153, y: 273 },
			bot3:     {x: 214, y: 214 },
			bot4:     {x: 280, y: 271 },
        },
        whirlislands: {
			waterfall_cave:  {x: 56,  y: 82,  name: "Whirl (Waterfall)" },
			waterfall_top:   {x: 230, y: 113, name: "Whirl (Waterfall)" },
			waterfall_bot:   {x: 239, y: 187, name: "Whirl (Waterfall)" },
			lake_entrance:   {x: 384, y: 137, name: "Whirl (Lake)"      },
			lake_left:       {x: 393, y: 29,  name: "Whirl (Lake)"      },
			lake_right:      {x: 574, y: 55,  name: "Whirl (Lake)"      },
			ledges_entrance: {x: 431, y: 207, name: "Whirl (Ledges)"    },
			ledges_bot:      {x: 592, y: 168, name: "Whirl (Ledges)"    },
			ledges_top:      {x: 647, y: 106, name: "Whirl (Ledges)"    },
			main_top:        {x: 101, y: 389, name: "Whirl (Main)"      },
			main_mid:        {x: 198, y: 557, name: "Whirl (Main)"      },
			main_botleft:    {x: 65,  y: 693, name: "Whirl (Main)"      },
			main_botmid:     {x: 356, y: 686, name: "Whirl (Main)"      },
			main_botright:   {x: 607, y: 614, name: "Whirl (Main)"      },
			main_cave:       {x: 316, y: 365, name: "Whirl (Main)"      },
        },
        victoryroad_reception: {
			reception_bot:   {x: 323, y: 646, name: "League Reception"  },
			reception_left:  {x: 194, y: 405, name: "League Reception"  },
			reception_right: {x: 453, y: 404, name: "League Reception"  },
			reception_top:   {x: 324, y: 366, name: "League Reception"  },
			roadf2_left:     {x: 24,  y: 211, name: "Victory Road (2F)" },
			roadf2_mid:      {x: 215, y: 70,  name: "Victory Road (2F)" },
			roadf2_right:    {x: 282, y: 178, name: "Victory Road (2F)" },
			roadf2_fall:     {x: 28,  y: 52,  name: "Victory Road (2F)" },
			roadf3_hole:     {x: 346, y: 79,  name: "Victory Road (3F)" },
			roadf3_mid:      {x: 539, y: 172, name: "Victory Road (3F)" },
			roadf3_bot:      {x: 592, y: 280, name: "Victory Road (3F)" },
			roadf3_top:      {x: 541, y: 49,  name: "Victory Road (3F)" },
        },

        mtmoon_r3_r4: {
			r3:             {x: 129, y: 330, name: "Route 3"  },
			r4:             {x: 301, y: 415, name: "Route 4"  },
			moon_stairstop: {x: 319, y: 75,  name: "Mt. Moon" },
			moon_doortop:   {x: 158, y: 86,  name: "Mt. Moon" },
			moon_stairsbot: {x: 347, y: 129, name: "Mt. Moon" },
			moon_doorbot:   {x: 349, y: 272, name: "Mt. Moon" },
        },
        mtsilver_r28: {
			r28_gate:    {x: 468, y: 332, name: "Route 28"   },
			r28_house:   {x: 326, y: 227, name: "Route 28"   },
			r28_center:  {x: 417, y: 120, name: "Route 28"   },
			r28_silver:  {x: 332, y: 65,  name: "Route 28"   },
			mt_entrance: {x: 145, y: 337, name: "Mt. Silver" },
			mt_left:     {x: 83,  y: 226, name: "Mt. Silver" },
			mt_right:    {x: 203, y: 21,  name: "Mt. Silver" },
			mt_exit:     {x: 50,  y: 80,  name: "Mt. Silver" },
        },
    },

    // Numbers are meant to be to check if exist any marks/progress in the maps
    // if null, then we don't do tracking
    // if undefined, then we don't draw the mark
    marks: [
        [["unknown", 0], ["dead_end", null], ["event",     0], ["center",      0], ["mart",        0], ["one_way",  null]],
        [["normal",  0], ["fighting",    0], ["flying",    0], ["poison",      0], ["ground",      0], ["rock",        0], ["bug",    0], ["ghost",       0], ["fairy",     0]],
        [["steel",   0], ["fire",        0], ["water",     0], ["grass",       0], ["electric",    0], ["psychic",     0], ["ice",    0], ["dragon",      0], ["dark",      0]],
        [["1",       0], ["2",           0], ["3",         0], ["4",           0], ["5",           0], ["6",           0], ["7",      0], ["8",           0]],
        [["c_bush",  0], ["c_surf",      0], ["c_boulder", 0], ["c_darkness",  0], ["c_whirlpool", 0], ["c_waterfall", 0], ["c_rock", 0], ["bike_needed", 0], ["c_trainer", 0]],
    ],
    progress: [
        [["zephyr_badge",  0], ["hive_badge",     0], ["plain_badge",   0], ["fog_badge",     0], ["storm_badge", 0], ["mineral_badge", 0], ["glacier_badge", 0], ["rising_badge", 0]],
        [["boulder_badge", 0], ["cascade_badge",  0], ["thunder_badge", 0], ["rainbow_badge", 0], ["soul_badge",  0], ["marsh_badge",   0], ["volcano_badge", 0], ["earth_badge",  0]],
        [["c_will",        0], ["c_koga",         0], ["c_bruno",       0], ["c_karen",       0], ["c_lance",     0]],
        [["hm_cut",        0], ["hm_fly",         0], ["hm_surf",       0], ["hm_strength",   0], ["hm_flash",    0], ["hm_whirlpool",  0], ["hm_waterfall",  0], ["hm_rocksmash", 0]],
        [["radio_card",    0], ["expansion_card", 0], ["squirt_bottle", 0], ["secret_potion", 0], ["card_key",    0], ["ss_ticket",     0], ["pass",          0]],
        [["bike",          0], ["clear_bell",     0], ["rainbow_wing",  0], ["basement_key",  0]],
    ],
};