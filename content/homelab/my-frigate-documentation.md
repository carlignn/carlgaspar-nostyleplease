---
title: My Frigate Documentation
subtitle: null
draft: false
date: 2025-08-27T16:00:00.000Z
tags:
  - all
  - homelab
---

## Hardware

I wanted something that would last a long time, the common brands based from my research are HikVision and Dahua. Here are my requirements:

* Supports Frigate
* High quality - atleast 4mp
* With POE - so that there are less wires and no more trouble of looking for the nearest power outlet
* Lightweight - I need it to be as light as possible because I can't drill in my current place so I have to stick it on the ceiling. I ended up going with a dome type CCTV since they are the lightest
* With audio - I need to record what people are talking about (plus points for digital memories)
* IR - the most common CCTVs have lights that will be activated when it's dark. I don't want to flash everyone around my place in the middle of the night.

This requirement is really hard to find locally for me. But after more research, I finally found the perfect one - [Dahua DH-IPC-HDBW2541E-S](https://shopee.ph/Dahua-HD-5MP-WDR-IR-Dome-Network-Camera-Wired-Outdoor-Intelligent-Detection-Night-Vision-IP-Camera-i.702273837.17463707511). It has checked all the boxes, I don't need to worry about anything else. Put in the heavy duty tape, put it on the ceiling, open it, point to the best angle, and you're good to go.

## Configuration File

```yaml
mqtt:
  enabled: false
audio: # <- enable audio events for all camera
  enabled: false

go2rtc:
  streams:
    living_room_main:
      - rtsp://{FRIGATE_RTSP_USER}:{FRIGATE_RTSP_PASSWORD}@10.10.50.1:554/live0
    living_room_sub:
      - rtsp://{FRIGATE_RTSP_USER}:{FRIGATE_RTSP_PASSWORD}@10.10.50.1:554/live1

cameras:
  living_room: # <------ Name the camera
    enabled: true
    ffmpeg:
      output_args:
        record: preset-record-generic-audio-aac
      inputs:
        - path: rtsp://{FRIGATE_RTSP_USER}:{FRIGATE_RTSP_PASSWORD}@127.0.0.1:8554/living_room_main     # <----- The stream you want to use for record
          input_args: preset-rtsp-restream
          roles:
            - record
        - path: rtsp://{FRIGATE_RTSP_USER}:{FRIGATE_RTSP_PASSWORD}@127.0.0.1:8554/living_room_sub     # <----- The stream you want to use for detection
          input_args: preset-rtsp-restream
          roles:
            - detect
            - audio
    live:
      stream_name: living_room_main
    detect:
      enabled: true # <---- disable detection until you have a working camera feed
      width: 704
      height: 576
      fps: 5
    objects:
      track:
        - person
        - dog
        - cat
      filters:
        person:
          threshold: 0.8
    snapshots:
      enabled: true
      timestamp: false
      bounding_box: true
      retain:
        default: 5
    record:
      enabled: true
      retain:
        days: 3
        mode: all
      alerts:
        retain:
          days: 7
          mode: motion
      detections:
        retain:
          days: 7
          mode: motion
    motion:
      mask: 0.551,0.034,0.958,0.034,0.957,0.082,0.552,0.081
version: 0.15-1

```
