---
title: My TrueNAS Documentation
subtitle: ''
draft: false
date: 2025-08-27T00:00:00+08:00
tags:
  - all
  - documentation
---

## Hardware

A lot of the hardware came from my old PC. I was thinking of a reason to upgrade my computer parts and thought..

> I think I need a NAS.. maybe?

* Case - [Sagittarius 8-bay](https://shopee.ph/Sagittarius-Chassis-NAS-8-Discs-Hot-Plug-10-Slots-MATX-Full-Height-Sylvania-AIO-Storage-UNRAID-Household-Cloud-Personal-i.1256014764.22564629999)
* Motherboard - ASUS TUF GAMING B550M-PLUS (WIFI)
* CPU - AMD Ryzen 5 3600
* RAM - TEAMGROUP-UD4-3600 - 16gb \* 2
* HBA - [LSI 9208-8I](https://shopee.ph/LSI-9208-8I-\(-9207-8i-\)-PCI-E-3-0-HBA-FW-P20-mode-for-ZFS-FreeNAS-unRAID-i.141818198.26204769467) (used)
* GPU - [Nvdia GT210](https://shopee.ph/New-GT210-PCIE-X1-1GB-Support-PCIE-X4-X8-X16-Graphics-Slot-Video-Card-GPU-i.985604463.22938831431)
  * I needed a GPU because the CPU that I have isn't capable of running headless.
  * I have to note that I tried plugging in a display simulator but it's not working all the time.
  * I bought an ultra old GPU to occupy the lowest sized PCIe slot - x1. It's more expensive because I can't find used PCIe x1 GPU anywhere near me. The reason is I wanted to be able to use the extra slot for 10gbit networking in the future.
  * It used to be a spare GTX 1050TI.
* System storage - [KINGSTON SNV2S250G SSD](https://shopee.ph/Kingston-NV2-250GB-500GB-1TB-2TB-M.2-2280-PCIe-4.0-NVMe-SSD-SNVS2-i.21380649.17885923754) - 250gb \* 1
  * I just remembered that I have 1tb \* 1 ssd plugged in that I was planning on using but forgot that it exists.
* Data storage - [HGST WD Ultrastar DC HC520 HDD](https://shopee.ph/HGST-WD-Ultrastar-DC-HC520%EF%BC%88HUH721212ALE600-HUH721212ALE601%EF%BC%897K2-Enterprise-Hard-Drive-12TB-7200-RPM-512e-SATA-6Gb-s-256MB-Cache-i.1046168692.22775867489) - 12tb \* 4 - RAIDZ1

## Datasets

I was looking for a good way to manage my files but eventually ended up with this structure. It might change in the future.

* critical - digital files, memories, and personal data
* important - NAS app config, projects, and VM backups
* standard - other NAS app config, isos, media library
* share - shared storage for friends and family

SMB shared - everything

NFS shared - VM backups and isos (for Proxmox)

## Data Protection

* Scrub Tasks - entire pool at 12:00 AM, only on Sunday
* Cloud Sync Tasks - critical and important at 12:00 AM, every day
  * See more [Backblaze](/my-backblaze-documentation)
* Periodic Snapshot Tasks - entire pool at 12:00 AM, every day. Keep for 1 week
* Periodic S.M.A.R.T. Tests -
  * SHORT - All Disks at 12:00 AM, only on Sunday
  * LONG - All Disks at 12:00 AM, on day 1 of the month, and on Saturday, only in February, April, June, August, October, and December

## Users

I have created root, local administrator, admin accounts, and user accounts with the naming convention like

* Admin accounts - e.g. cgaspar\_admin
  * first letter of first name and last name \<underscore> admin
* User accounts - e.g. cgaspar
  * first letter of first name and last name

## Virtualization

Virtualization is not supported

## Apps

I'm using this NAS for a few services as well. I thought that if I could lift up some of the tasks on my cluster to this NAS, that would be great.

* drawio
* filebrowser
* [frigate](/homelab/my-frigate-documentation)
* immich (under maintenance)
* metube
* overseer
* paperless (under maintenance)
* plex
* prowlarr
* qbittorrent
* radarr
* sonarr

The naming convention for these apps are `ct1<appname><appnumber>` (e.g. ct1drawio1), in which ct1 means container1.

## How to Connect to my NAS

### Internal Config
* Add dataset under `/hdd/share`
* Add user (.e.g. cgaspar)

### External Config
* Login to tailscale using USR(tailscale, only me knows the credentials) user and connect to the root
* Add the directory to the machine(laptop, phone, or tablet) - *NAS IP*/share or *NAS IP*/share/cgaspar (if I can make this to work)