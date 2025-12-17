---
title: i3wm Configuration and Setup on Alpine Linux
subtitle: 'Uhh, why am I here?'
date: 2024-12-22T00:00:00+08:00
draft: true
tags:
  - all
comments: false
---

This post has been paused for the meantime due to priorities.

I was looking for a lightweight operating system to host my dashboard and a few static movies/videos that I can play in the background and I landed on..

This tutorial is deprecated. I have to move from Alpine to Debian since Alpine doesn't have native support for my NVIDIA graphics card.

## Alpine

On Alpine download page, you can choose the **Standard** or the **VM** version. I used the **VM** version in this setup since I will be installing it in Proxmox. Standard will work, too. I am really not sure what is the difference, aside from the slimmed down kernel as stated in their [WEBSITE](https://alpinelinux.org/downloads/).

Once installed login using:

```shell
root
```

To proceed with the setup, type:

```shell
setup-alpine
```

Follow the prompts. When it's time to select a mirror, enable the community mirror, then select the fastest mirror.

## i3wm

For basics, start with:

```shell
setup-xorg-base
```

This is a convenient script that sets up the basic components required to run the X Window System (X11) on Alpine Linux

You can now add the apps that you need. For starters:

```shell
apk add i3wm i3status alacritty xrandr feh dbus firefox font-dejavu thunar picom
```

* **i3wm**: the tiling window manager
* **i3status**: status bar generator for i3wm
* **alacritty**: cross-platform, GPU-accelerated terminal emulator
* **xrandr**: tool for managing screen resolutions, rotation, and multi-monitor setups on X11
* **feh**: tool for managing wallpapers
* **dbus**: message bus system for communication between applications and the system
* **firefox**: browser
* **font-dejavu**: commong font. The configuration will not work without this.
* **thunar**: XFCE based file manager
* **picom**: lightweight compositor for transparency, shadows, and VSync on X11

Enable dbus:

```shell
rc-update add dbus
```

Guide I'm following - \\

I added dmenu, i3lock, arandr, vim as well.

* arandr: is the GUI version of xrandr

Add exec i3 to .xinitrc file

startx to start

## Reference

* Alpine Linux: Installation and Setup Guide for i3wm - [https://www.youtube.com/watch?v=BRBuH-1dM3g](https://www.youtube.com/watch?v=BRBuH-1dM3g)
* i3wm: Jump Start (1/3) - [https://www.youtube.com/watch?v=j1I63wGcvU4](https://www.youtube.com/watch?v=j1I63wGcvU4\&list=PL0rXAycsylvXxyPDT5kGQ5MiHcqrZWv69\&index=1)
* How to change IP in Alpine Linux - [https://wiki.alpinelinux.org/wiki/Configure\_Networking](https://wiki.alpinelinux.org/wiki/Configure_Networking)
