---
title: My Pi-Hole Documentation
subtitle: ''
draft: false
date: 2025-08-25T00:00:00.000Z
tags:
  - all
  - homelab
---

First posted on: `2025-01-01T00:00:00.000Z`

***

Run the [Pi-Hole helper script](https://community-scripts.github.io/ProxmoxVE/scripts?id=pihole) to simplify the LXC creation.

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/pihole.sh)"
```

Add the blacklists to improve adblocking [https://firebog.net/](https://firebog.net/).

For NSFW, try [This doesn't look like it's working](https://github.com/blocklistproject/Lists).

## Unbound

Just follow the [official guide](https://docs.pi-hole.net/guides/dns/unbound/?h=unbound). It is as easy as it is already included in the Pi-hole LXC installer. Everything is already good to go after installation.

If you don't want to use Pi-Hole but want to use Unbound, you can use OPNSense with Unbound plugin to make things easier.

## Reference

* [Proxmox Helper Scripts for Pi-Hole](https://community-scripts.github.io/ProxmoxVE/scripts?id=pihole)
