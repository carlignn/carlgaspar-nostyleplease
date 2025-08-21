---
title: i3wm Configuration and Setup on Debian Linux
date: 2025-01-02T16:00:00.000Z
draft: true
---

I was looking for a lightweight operating system to host my dashboard and a few static movies/videos that I can play in the background and I landed on Alpine Linux. But apparently, NVIDIA drivers are hard to install in Alpine so I moved to Debian.

This VM will passthrough my 1050TI so that I can watch movies, use the browser, and use software that requires hardware transcoding with ease. The other software will be in this VM because once you passthrough a GPU, it's hard to create a vGPU out of it.

Install a headless Debian by following the instructions in the installer.

apt install xorg (equivalent to setup-xorg-base in Alpine Linux)

apt install i3 i3status

To install Brave browser

```shell
apt install apt-transport-https curl gnupg
```

These are the required dependencies to install the browser.

Download Brave's GPG key

```shell
curl -fsS https://brave-browser-apt-release.s3.brave.com/brave-core.asc | gpg --dearmor -o /usr/share/keyrings/brave-archive-keyring.gpg
```

Add the Brave's repository

```shell
echo "deb [signed-by=/usr/share/keyrings/brave-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main" | tee /etc/apt/sources.list.d/brave-browser-release.list
```

apt update

apt install brave-browser

Note that you can't run Brave browser using the root account. Change to regular user account using

su - yourusername

You need to install the graphics card as it might cause issues later on (e.g. brave not launching)

Update the repository to add nvidia repository. NVIDIA drivers are included in contrib and non-free repositories.

Edit the /etc/apt/sources.list file:

Add contrib and non-free sections to your repositories. For example:

deb http\://deb.debian.org/debian/ stable main contrib non-free

deb-src http\://deb.debian.org/debian/ stable main contrib non-free

apt update

apt install nvidia-driver

reboot

Verify installation

```shell
nvidia-smi
```

(Optional) I received an error about conflicting nouveau kernel module. Even though the NVIDIA driver installation went smoothly, blacklist the nouveau driver to avoid conflicts in the future. Upon checking the file, NVIDIA already blacklisted the nouveau driver for me.

```shell
nano /etc/modprobe.d/blacklist-nouveau.conf
```

ss

```shell
blacklist nouveau
options nouveau modeset=0
```

Update the intramfs (initial RAM filesystem) so that changes take effect:

```shell
sudo update-initramfs -u
```

reboot

### Configuring i3 config

I will be creating users here, I need to make sure that all users will have a default setup aside from their setup. On the default location of i3 config, add to the very top (before any other config)

```shell
include /etc/i3/config
```

This tells i3 to load /etc/i3/config in addition to the user's personal config file. With this setup, you can have a common set of configurations defined in /etc/i3/config, and user-specific customizations can be added in the user-specific file.

Copy the config to /etc/i3/config (so that it's readable by all users)

```shell
sudo cp ~/.config/i3/config /etc/i3/config
```

Make sure the configuration file has the correct permissions:

```shell
sudo chmod 644 /etc/i3/config
sudo chown root:root /etc/i3/config
```

This ensures that the configuration file is readable by all users, but only writable by root.

#### I have to remove the default terminal and nano. I want to use alacritty and vim

### How to remove packages in debian

Remove a package (but keep configuration files):

sudo apt remove \<package-name>

Remove a package and its configuration files:

sudo apt purge \<package-name>

Remove unused dependencies that were installed automatically:

sudo apt autoremove

Clean up downloaded package files (to free up space):

sudo apt clean

#### How to copy the configuration from one user to another, in this case, user to cgaspar

cp /root/.config/i3/config /home/username/.config/i3/config

If there are config changes, do it in the root then copy to the user

#### How to remove ipv6

Update and add nano /etc/sysctl.conf

```shell
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

apply changes

sysctl -p

### Configuring i3status

Make the config file mkdir -p \~/.config/i3status

Copy the default config to the config folder cp /etc/i3status.conf \~/.config/i3status/config

alt shift r to refresh i3
