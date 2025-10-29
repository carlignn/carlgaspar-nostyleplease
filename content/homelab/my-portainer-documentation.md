---
title: My Portainer Documentation
subtitle: ''
draft: false
date: 2025-08-27T00:00:00.000Z
tags:
  - all
  - documentation
---

## Installation

Run this Proxmox helper script to create a Debian LXC with Docker inside. Then enabled portainer from the initial configuration.

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/ct/docker.sh)"
```

* IPv4 = static
* IPv6 = disabled
* Docker compose = enabled
* Portainer GUI = enabled
* Portainer agent = disabled
* Expose docker TCP socket = disabled

## Configuration

Connect the agents in Environments > Docker Standalone

* Name - hl1postiz1
  * all lowercase
* Environment address - 10.10.30.2:9001
  * always at 9001 port so far

## Reference

* [Proxmox Helper Scripts for Docker](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker)
