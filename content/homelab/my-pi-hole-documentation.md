---
title: My Pi-Hole Documentation
subtitle: ''
draft: false
date: 2025-08-25T00:00:00.000Z
tags:
  - all
  - homelab
---

First posted on: 2025-01-01T00:00:00.000Z

***

I have since moved Pi-Hole + Unbound to OPNSense. [My OPNSense Documentation - Unbound](/homelab/my-opnsense-documentation/#unbound)

Run the [Pi-Hole helper script](https://community-scripts.github.io/ProxmoxVE/scripts?id=pihole) to simplify the LXC creation.

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/pihole.sh)"
```

Add the blacklists to improve adblocking [https://firebog.net/](https://firebog.net/).

For NSFW, try [This doesn't look like it's working](https://github.com/blocklistproject/Lists).

## Unbound

Just follow the [official guide](https://docs.pi-hole.net/guides/dns/unbound/?h=unbound). It is as easy as it is already included in the Pi-hole LXC installer. Everything is already good to go after installation.

If you don't want to use Pi-Hole but want to use Unbound, you can use OPNSense with Unbound plugin to make things easier.

## Local DNS Issue

When I SSH to hl1homepage1 for example, it redirects me to the NGINX Proxy Manager which is not what I want to do. To go around this, you'd need to add another entry in local DNS that would point to the server (e.g. hl1homepage1-ssh)

## Reference

* [Proxmox Helper Scripts for Pi-Hole](https://community-scripts.github.io/ProxmoxVE/scripts?id=pihole)
