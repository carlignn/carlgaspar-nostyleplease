---
title: Homelab
draft: false
date: 2026-04-03T00:00:00+08:00
tags:
  - documentation
comments: true
---

What started as curiosity about how networks and servers actually work turned into a full home infrastructure project. My homelab is where I learn by doing - setting up firewalls, breaking storage configurations, debugging DNS at 2 AM, and documenting everything along the way. It's an ongoing project that keeps evolving as I find new things to tinker with.

## Hardware

The homelab runs on three dedicated machines:

- **OPNSense Firewall** — Lenovo m720q mini PC (Intel i5 8500T, 16GB RAM, 120GB NVMe, dual-port Gigabit NIC). Handles all routing, DNS, and firewall duties. [Documentation](/homelab/my-opnsense-documentation/)
- **Proxmox Hypervisor** — Runs LXC containers and VMs for all services. [LXC & VM Primer](/homelab/proxmox-lxc-and-vm-primer/)
- **TrueNAS Storage Server** — Sagittarius 8-bay NAS chassis (AMD Ryzen 5 3600, 32GB RAM, LSI 9208-8I HBA, 4x 12TB HGST Ultrastar in RAIDZ1). Dedicated build after outgrowing a virtualized setup. [Documentation](/homelab/my-truenas-documentation/)

## Networking

OPNSense sits between the modem and everything else — all traffic flows through it.

- Unbound DNS with Steven Black blocklist for ad blocking
- Tailscale VPN for remote access with advertised routes to the entire 10.10.0.0/16 subnet
- Monit monitoring with ProtonMail SMTP alerts for gateway health
- VLAN segmentation planned (MGMT, DATA, MEDIA, IOT, AI, SERVER, CLIENT, DMZ)
- Naming convention: `HL1<FUNCTION><NUMBER>` (e.g., HL1PROXMOX1, HL1TRUENAS1)

## Storage & Backup

TrueNAS manages four ZFS datasets organized by priority:

- **critical** — personal files, memories, digital documents
- **important** — app configs, project files, VM backups
- **standard** — ISOs, media library, other app configs
- **share** — shared storage for friends and family

Data protection runs on a schedule: daily Backblaze cloud sync for critical and important data, weekly ZFS snapshots with 1-week retention, weekly S.M.A.R.T. short tests, and bimonthly long tests. [Backblaze Documentation](/homelab/my-backblaze-documentation/)

## Services

All services run in Docker containers managed through [Portainer](/homelab/my-portainer-documentation/), with [Caddy](/homelab/my-caddy-documentation/) handling reverse proxy and TLS.

**Media**
- Plex — media server and streaming
- [Radarr, Sonarr, Prowlarr](/homelab/my-arr-stack-documentation/) — automated movie and TV show management
- Overseerr — media request management
- qBittorrent — download client

**Documents & Photos**
- [Paperless-ngx](/homelab/my-paperless-documentation/) — document scanning, storage, and search
- Immich — photo backup (under maintenance)

**Surveillance**
- [Frigate](/homelab/my-frigate-documentation/) — NVR with object detection (person, dog, cat) paired with a Dahua 5MP PoE dome camera

**Development**
- [Code-Server](/homelab/my-code-server-documentation/) — VS Code in the browser for remote development

**Other**
- Draw.io — diagrams and flowcharts
- Filebrowser — web-based file management
- MetubeUI — YouTube downloader

[Notification system](/homelab/my-notification-documentation/) runs across OPNSense and TrueNAS via ProtonMail SMTP relay with per-app tokens.

## Lessons Learned

Building the homelab came with its share of expensive mistakes. I bought 8 Samsung 870 EVO SSDs that turned out to be counterfeit — 5 of them failed, costing me PHP 18,910 and a lot of frustration. I switched to verified Crucial MX500 drives after that. [Full story](/homelab/i-got-scammed-8-times/)

Running TrueNAS virtualized inside Proxmox taught me about IOMMU group headaches the hard way — drive disconnections, passthrough failures, and NFS permission nightmares eventually pushed me to build a dedicated TrueNAS server. [Setup notes](/homelab/truenas-setup-in-proxmox/)

The biggest takeaway: document everything. Every config change, every workaround, every failure. The homelab blog posts exist because past-me needed them and future-me will too.

## Technologies Used

* Proxmox VE
* TrueNAS
* OPNSense
* Docker
* ZFS (RAIDZ1)
* Tailscale
* Backblaze B2
* Caddy
* Plex
* Frigate
* Paperless-ngx
* ProtonMail SMTP
