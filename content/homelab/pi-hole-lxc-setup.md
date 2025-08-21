---
title: Pi-hole LXC Setup
date: 2025-01-01T16:00:00.000Z
tags:
  - homelab
---

Pi-hole [helper script](https://community-scripts.github.io/ProxmoxVE/scripts?id=pihole).

```shell
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/pihole.sh)"
```

After the installation, make sure to change the hostname to your preference. Just edit /etc/hosts and /etc/hostname and you're good to go.

Add the blacklists to improve adblocking [https://firebog.net/](https://firebog.net/)

For NSFW, try [https://coygeek.com/docs/pihole-adult/](https://github.com/blocklistproject/Lists)

### Unbound

[GUIDE](https://docs.pi-hole.net/guides/dns/unbound/?h=unbound)

Easy as it is already included in the Pi-hole LXC installer. Everything is already good to go after installation.
