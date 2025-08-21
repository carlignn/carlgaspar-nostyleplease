---
title: TrueNAS Setup in Proxmox
subtitle: ''
description: It's working!
date: 2024-12-30T16:00:00.000Z
---

From this guide, there's a comment [https://www.youtube.com/watch?v=M3pKprTdNqQ](https://www.youtube.com/watch?v=M3pKprTdNqQ\&t=799s)

This video is really really the top of the iceberg. A few crucial thing is missing from this like:
\- excluding the disks from pve, or else you will wonder why it periodically interrupts disk operations or wakes up sleeping disks
\- disabling the "use tablet for pointer" as that in itself causes 10+% CPU load on the host side for some reason
\- disabling "hardware" acceleration of virtIO as this is known to cause problems
\- doing smart configuration (like APM, idle times) on the host side as the guest won't have access to smart data and alerts
\- optionally moving the system dataset to the boot disk

Drives were disconnecting randomly. Add this on Your host: cat /etc/modprobe.d/mpt3sas.conf

blacklist mpt3sas

Then

Full grub line: GRUB\_CMDLINE\_LINUX\_DEFAULT="vfio-pci.ids=1000:0087 pcie\_acs\_override=downstream,multifunction"

**pcie\_acs\_override=downstream,multifunction**: will make the IOMMU groups separate of each other.

Guide: here [https://www.reddit.com/r/truenas/comments/x0tgub/scale\_drive\_resets\_with\_lsi\_93008i\_looking\_for/](https://www.reddit.com/r/truenas/comments/x0tgub/scale_drive_resets_with_lsi_93008i_looking_for/)

## Things to do in TrueNAS

Update the fields in Network > Global Settings

To get internet connection in TrueNAS, go to Network > Global Settings > Fill out the gateway and the DNS Servers.

## Best practices for datasets

[https://www.truenas.com/community/threads/path-to-success-for-structuring-datasets-in-your-pool.85460/](https://www.truenas.com/community/threads/path-to-success-for-structuring-datasets-in-your-pool.85460/)

## Naming convention

datasets - dataset\_name

folders within datasets - Whatever

## To give access to TrueNAS NFS share to Proxmox

Datacenter > Storage > Add NFS > Fill the fields

## Make sure in TrueNAS

* That there is an NFS share
* Network is set
* Maproot User is set to root (this and the group below is the account that is used to modify the NFS share)
* Maproot Group is set to wheel

## Roadblocks

### LXCs can't be backed up (permission denied)

The [post](https://blog.doussan.info/posts/container-backup-permission-denied-nfs/) to the guide, the [thread](https://forum.proxmox.com/threads/tmp-cannot-open-permission-denied.87730/post-462646) if the error still persists, direct [link ](https://www.bachmann-lan.de/proxmox-unprivileged-container-backup-failed-permission-denied/)to the guide (this is the one that worked).

Basically, you can't backup LXCs that are unprivileged. If you really need the LXCs to be unprivileged, edit /etc/vzdump.conf in Proxmox and add tmpdir: / tmp

```shell
nano /etc/vzdump.conf
tmpdir: / tmp
```

### Use TrueNAS on LXCs (only available on privileged LXCs)

What this will do is mount the NFS to the LXC

Enable NFS in TrueNAS

On the LXC, go to Options > Features > Check the NFS

Install NFS client packages on the LXC

```shell
apt install nfs-common
```

You'd want to mount the NFS to the LXC on boot, so edit /etc/fstab then add

```shell
# UNCONFIGURED FSTAB FOR BASE SYSTEM
IP:/mnt/NFS/NFS /home/admin/NFS nfs defaults 0 0

# In my case, this is how it looked like
hl1truenas1.carlgaspar.local:/mnt/hdd/standard/media_library /home/admin/truenas1_media_library nfs defaults 0 0
```

Reboot to mount

To mount without restarting

```shell
mount  truenas1_media_library
```

To check if it's mounted, type

```shell
df -h
```

[Full guide](https://harish2k01.in/mounting-an-nfs-share-in-proxmox-lxc/)

### Can't see files in TrueNAS when queried by Plex

The files are being created by a user in TrueNAS but when passed as a shared NFS/SMB, it is being read as a different user, therefore not having access anymore. Make sure that the reader is root so it can see everything.

### Standby mode to save electricity

[https://www.youtube.com/watch?v=WvCURgT151c](https://www.youtube.com/watch?v=WvCURgT151c)

### Best practices

[https://www.youtube.com/watch?v=WvCURgT151c](https://www.youtube.com/watch?v=WvCURgT151c)

## TrueNAS has been moved to a separate server

### When connecting to iPad, I can see all the available datasets even if I don't have access to them.

Go to Shares > SMB Share > Purpose > No Presets > Advanced Options > Enable
Access Based Share Enumeration

### Error when creating nextcloud

Enable auto permissions under db

[https://forums.truenas.com/t/ee-install-of-nextcloud-fails-failed-up-action/14788/5](https://forums.truenas.com/t/ee-install-of-nextcloud-fails-failed-up-action/14788/5)

### Error (nextcloud) Access through untrusted domain docker

Put the nextcloud domain: [https://forums.unraid.net/topic/77853-solved-nextcloud-access-through-untrusted-domain/](https://forums.unraid.net/topic/77853-solved-nextcloud-access-through-untrusted-domain/)

Add this to the end of the config/config.php file

```php
'trusted_domains' => 
array (
    0 => '10.10.20.2:30028',
    1 => '127.0.0.1',
    2 => 'localhost',
    3 => 'nextcloud',
  ),
'overwrite.cli.url' => 'https://10.10.20.2:30028',
'overwritehost' => '10.10.20.2:30028',
'overwriteprotocol' => 'https',
```

1. overwrite.cli.url
   * Defines the base URL Nextcloud uses for command-line operations (e.g., occ commands).
   * If not set correctly, CLI commands may generate incorrect URLs.
2. overwritehost
   * Forces Nextcloud to use this hostname for all web requests, even if the request comes from a different hostname or IP.
   * Useful when running behind a reverse proxy or when users access Nextcloud from multiple domains.
3. overwriteprotocol
   * Defines whether Nextcloud should use HTTP or HTTPS for URLs.
   * If https is set, Nextcloud will force secure connections, even if accessed over http.

Only use HTTP if you're not using HTTPS or if HTTPS is breaking things.
