---
title: My Caddy Documentation
subtitle: 
draft: false
date: 2025-12-02T00:00:00+08:00
tags:
  - all
  - documentation
  - software development
comments: true
---

Caddy is a web server that I will use to host a few servers locally. I'm used to apache but it's not available in the Proxmox VE Helper Scripts. I don't want to go through manual installation, as they say Keep it Simple, Stupid!

Just drag and drop the web app files in `/var/www/`

```bash
/var/www/
    ├── site1/
    │     ├── index.html
    │     ├── css/
    │     ├── js/
    │     └── images/
    └── site2/
          ├── index.html
          └── ...
```

Then update the Caddy configuration in `/etc/caddy/Caddyfile`

```bash
# Static site 1
site1.local {
    root * /var/www/site1
    file_server
    tls internal
}

# Static site 2
site2.local {
    root * /var/www/site2
    file_server
    tls internal
}
```

Then add the site in Local DNS - in my case, it's in OPNSense > Unbound.

Finally, `systemctl reload caddy` to reload Caddy.
