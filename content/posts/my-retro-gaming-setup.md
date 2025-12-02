---
title: My Retro Gaming Setup
draft: false
date: 2025-11-21T00:00:00+08:00
tags:
  - all
  - game
---

## Components
* PC
* Homelab
* iPad

## PC
My PC will host [Apollo](https://github.com/ClassicOldSong/Apollo) - fork of Sunshine which will stream the games to my iPad which will be the console of choice.

## Homelab
As of the moment, my homelab will be the storage of my roms, I'm not sure if there will be a use of it other than storage but we'll see.

## iPad
I have an iPad Pro 11 M2 laying around, I use for leisure and editing photos. It's a good thing that it now supports emulation.

Now, I don't want to play touching a screen for buttons, I'd need a dedicated one but I don't want it to be literally separated, I want it to be on the side. That's why I bought [GameSir G8+](https://shopee.ph/%E3%80%90Shipped-Today%E3%80%91GameSir-G8-Galileo-Type-C-Gamepad-Mobile-Phone-Controller-with-Hall-Effect-Stick-i.1113748352.24658463638). I'm actually torned between buying a dedicated handheld device because the options are almost the same price (my option is an Anbernic RG40XXV). But I'm a minimalist, so I have to go the minimal way.

Here are the software that I'll put on my iPad:

  * RetroArch
  * PPSSPP
  * Moonlight - the software that I'll use to connect to Apollo on my computer

## Coverage

| Generation                    | Console                    | Device | App Needed               | Notes                                                           |
| ----------------------------- | -------------------------- | ------ | ------------------------ | --------------------------------------------------------------- |
| 8-bit                         | NES                        | iPad   | RetroArch                | Perfect native play.                                            |
| 8-bit                         | Master System              | iPad   | RetroArch                | Perfect.                                                        |
| 8-bit                         | Atari 2600 / 5200 / 7800   | iPad   | RetroArch                | Good.                                                           |
| 16-bit                        | SNES                       | iPad   | RetroArch                | Perfect native.                                                 |
| 16-bit                        | Genesis / Mega Drive       | iPad   | RetroArch                | Perfect.                                                        |
| 16-bit                        | Neo Geo                    | iPad   | RetroArch                | Great.                                                          |
| 16-bit                        | TurboGrafx-16 / PC Engine  | iPad   | RetroArch                | Perfect.                                                        |
| 32-bit / 64-bit               | PlayStation 1              | iPad   | RetroArch                | Excellent.                                                      |
| 32-bit / 64-bit               | Sega Saturn                | iPad   | RetroArch                | Playable but minor glitches in some games.                      |
| 32-bit / 64-bit               | Dreamcast                  | iPad   | RetroArch                |                                                                 |
| 32-bit / 64-bit               | N64                        | iPad   | RetroArch                | Many games smooth; some heavy titles may stutter.               |
| 32-bit / 64-bit               | Game Boy / Color / Advance | iPad   | RetroArch                | Perfect native.                                                 |
| 32-bit / 64-bit               | DS                         | iPad   | RetroArch (melonDS core) | Works very well; Delta also possible but RetroArch preferred.   |
| 32-bit / 64-bit               | PSP                        | iPad   | PPSSPP                   | Excellent native.                                               |
| 32-bit / 64-bit               | GameCube                   | PC     | Dolphin                  | Not possible natively on iPad; stream via Moonlight if desired. |
| 32-bit / 64-bit               | Wii                        | PC     | Dolphin                  | Stream via Moonlight for iPad.                                  |
| 128-bit / 7th gen             | PS2                        | PC     | PCSX2                    | iPad cannot run natively; stream via Moonlight.                 |
| 128-bit / 7th gen             | GameCube / Wii             | PC     | Dolphin                  | Streamable to iPad.                                             |
| 128-bit / 7th gen             | Xbox                       | PC     | Xemu                     | Streamable.                                                     |
| 128-bit / 7th gen             | Xbox 360                   | PC     | Xenia                    | Streamable; requires good CPU.                                  |
| Handheld 7th gen              | Nintendo 3DS               | PC     | Citra                    | Streamable to iPad.                                             |
| 8th gen / modern consoles     | Wii U                      | PC     | Cemu                     | Streamable.                                                     |
| 8th gen                       | Switch                     | PC     | Yuzu / Ryujinx           | Streamable to iPad; iPad alone cannot handle it.                |
| 8th gen                       | PS3                        | PC     | RPCS3                    | Streamable; heavy CPU requirement.                              |
| PC Games                      | Steam / Epic / GOG         | PC     | Steam Link / Moonlight   | Can stream to iPad.                                             |

## Roms (Set 1) - Classic Systems (Arcade to PS1)
These are the classic roms. I can save all the roms from these systems since their sizes are not that big to store.

Almost all Roms in the **Classic Systems** will run on both RetroArch (iPad) and RetroBat (PC). But only [top 10 games on every console of all time](/posts/top-10-games-from-classic-systems-of-all-time) will be installed on the iPad to save space.

### Roadblocks
* iPad doesn't support GameCube and Dreamcast Cores.
* iPad can't load games from an external storage. It will still download the games locally defeating it's purpose.
### Commit List
* Initial Commit - EBZero on [Reddit](https://www.reddit.com/r/Roms/comments/10hviqi/sharing_my_best_of_rom_packs/) has their Best-Of games from the classic systems
* PS1 - Added:
  * Pepsiman (Japan)

## Roms (Set 2) - Modern Systems (PS2 and Above)
No need to get all the Rom sets from the Modern Systems, the files are too big, just grab what's the best and save it.

All Roms in the **Modern Systems** will run only on RetroBat.

### Roadblocks
* XBOX files had to be converted to xiso file
### Commit List
* Initial Commit - EBZero on [Reddit](https://www.reddit.com/r/Roms/comments/10hviqi/sharing_my_best_of_rom_packs/) has their Best-Of games from the classic systems
* XBOX 360, XBOX, PS2, Virtual Boy, Wii, PS3 - [Top Games](https://docs.google.com/spreadsheets/d/1RlzGfcQ7Iky9MpD7tzI5dyw0WnNhvBoYKndGaAhzOYQ/edit?gid=0#gid=0) by [Venture Fox](https://www.reddit.com/r/Roms/comments/17jriyi/compilation_of_recommended_games/)
* PS2 - Added:
  * Grand Theft Auto - Liberty City Stories (USA)
  * Grand Theft Auto - Vice City Stories (USA)
  * Grand Theft Auto III (USA)
* XBOX 360 - Added:
  * Last Remnant, The (USA)

## References
* [Top Games](https://docs.google.com/spreadsheets/d/1RlzGfcQ7Iky9MpD7tzI5dyw0WnNhvBoYKndGaAhzOYQ/edit?gid=0#gid=0) by [Venture Fox](https://www.reddit.com/r/Roms/comments/17jriyi/compilation_of_recommended_games/)
* BIOS Packs [Reddit](https://www.reddit.com/r/Roms/comments/gh3i98/full_clean_bioses_set_for_retroarch_retropie/) | [Github](https://github.com/Abdess/retroarch_system/releases/tag/v20220308)
* [Top Roms](https://github.com/cdahmedeh/TopRoms/) by cdahmedeh (not sure if I'm using this, it's too much)