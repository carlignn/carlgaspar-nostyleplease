---
title: My Postiz Documentation
subtitle: 
draft: false
date: 2025-08-27T00:00:00+08:00
tags:
  - all
  - documentation
---

##

This will no longer be used in my Homelab. It was very unstable and fails most of the time. I'm moving this posting service to the free tier of Buffer, with 3 social medias and one I'm manually scheduling.

---

## Installation

Run this Proxmox helper script to create a Debian LXC with Docker inside.

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/ct/docker.sh)"
```

* IPv4 = static
* IPv6 = disabled
* Docker compose = enabled
* Portainer GUI = disabled
* Portainer agent = enabled
* Expose docker TCP socket = disabled

Create a postiz folder in the root

```bash
mkdir /postiz
```

Create a `docker-compose.yml` file on that directory

```bash
nano docker-compose.yml
```

And paste the [Network Requirements](https://docs.postiz.com/installation/docker-compose) changing below code:

```bash
MAIN_URL: "http://localhost:5000"
FRONTEND_URL: "http://localhost:5000"
NEXT_PUBLIC_BACKEND_URL: "http://localhost:5000/api"
JWT_SECRET: "whateveryoulike"
```

Replace `localhost` with the IP of the machine (if you're not using the localhost for Postiz).

Run `docker compose up -d`. No dash in between docker and compose due to the different requirement from the helper script (newer docker compose version I guess?)

Doing so will make docker run whatever is inside the `docker-compose.yml` file. Meaning, you can just create another folder, put another `docker-compose.yml` file and run the command to have a new separate docker container.

## Providers Configuration

Follow the [guide](https://docs.postiz.com/providers) on their official documentation.

## Reference

* [Postiz: Installing Tutorial (Local, Docker(-Compose))](https://youtu.be/A6CjAmJOWvA?si=RFVoNxUgPR0RgVOx)
* [Proxmox Helper Scripts for Docker](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker)
* [Docker Compose Postiz Docs](https://docs.postiz.com/installation/docker-compose)
