# Windows not Detecting Changes - WSL2 Update
## updated 5-10-2021

This note will cover a variety of different fixes for volumes issues and file watchers not updating changes. Please be aware that each terminal (GitBash, Powershell, WSL) will require a slightly different way of dealing with the current working directory.

## WSL2 with Ubuntu

When using WSL2 as a backend for Docker Desktop, the project should be created on or copied directly to the Linux file system. If the project is on the Windows file system, the volumes will likely not work. All docker commands should be run within WSL2 and not on Windows.

To open your WSL2 operating system, type wsl in the Windows / Cortana Search Bar and click wsl.

In the WSL2 terminal change into your root user directory by running cd ~

Run explorer.exe . to open up a file browser within WSL2.

Move the frontend project directory into the file browser window

Your project path should now look like this:
/home/USER/frontend

Using the WSL2 terminal build your Docker image as you typically would:
docker build -f Dockerfile.dev -t USERNAME:frontend .

Using the WSL2 terminal, start and run a container. It is very important that you do not use a PWD variable as shown in the lecture video as this will not work. Use the ~ alias for the home directory or type out the full path:
docker run -it -p 3000:3000 -v /app/node_modules -v ~/frontend:/app USERNAME:frontend
or
docker run -it -p 3000:3000 -v /app/node_modules -v /home/USER/frontend:/app USERNAME:frontend

Going forward, all Docker commands and projects should be run within WSL2 and not Windows.

**Important Note** - Some students have been getting an error when attempting to build the container:

EACCES: permission denied, mkdir '/app/node_modules.cache'

We have tested the material repeatedly on a Linux host and Windows 10 WSL2 machine and have never been able to replicate this. However, a fix has been provided in the featured question here:

https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/11436998#questions/14297316

## Docker Toolbox

Pass the container the environment variable with fix directly in the docker run command (recommended):

-e CHOKIDAR_USEPOLLING=true

or

Create a .env file in the project root with the following inside of it:

CHOKIDAR_USEPOLLING=true

Working example commands for each terminal (be sure to run these commands in the root of your project directory)

## Docker Quickstart (recommended)

docker run -it -p 3000:3000 -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

## PowerShell (recommended)

docker run -it -p 3000:3000 -v /app/node_modules -v /c/Users/username/frontend:/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

Note: Currently, using the full path to your project directory is the only thing that seems to properly mount the volume. Please remember to replace your current working directory with what is shown in the command above.

## GitBash (might be problematic)

winpty docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

VirtualBox Folder Sharing

By default, VirtualBox will share the C:\Users directory. If you are using an external or network drive or some other drive on your machine such as D:\ or F:\ it will not be shared and your volumes not be mounted properly.

Please make sure that the drive you are using has been shared by opening VirtualBox and clicking on "Settings", then "Shared Folders". The drive should be listed like below:


Windows Defender, Firewalls and Anti-Virus

Any of these services could possibly conflict with the volume mounting. When in doubt, disable each service one by one to see if the volumes begin working correctly.

## Docker Desktop with HyperV

These examples are only for Docker Desktop that is using HyperV as a backend. If you are using WSL2, stop as this does not apply to you - please see the WSL2 with Ubuntu section at the beginning of this note.

Working example commands for each terminal (be sure to run these commands in the root of your project directory)

## PowerShell

docker run -it -p 3000:3000 -v /app/node_modules -v ${pwd}:/app IMAGE_ID

## GitBash

winpty docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app IMAGE_ID

## Docker Desktop File Sharing

By default, your C:\ will be shared with Docker Desktop for volume mounting. If you are using an external or network drive or some other drive on your machine such as D:\ or F:\ it will not be shared and your volumes not be mounted properly.

Please make sure that the drive you are using has been shared by clicking Docker icon in the systray. Click "Settings", then "Resources" and finally "File Sharing". The drive should be listed like below:


## Windows Defender, Firewalls and Anti-Virus

Any of these services could possibly conflict with the volume mounting. When in doubt, disable each service one by one to see if the volumes begin working correctly.

## Windows not Detecting Changes - Docker Compose
updated 4-21-2020

If you are using any version of Windows and your React app is not automatically reloading after a code change, you can add this environment variable to your compose file:

services:
  web:
    environment:
      - CHOKIDAR_USEPOLLING=true

## Tests Not Re-running on Windows
updated 4-21-2020

If you are using Windows Home you may have noticed that when adding a test or making a change to the App.test.js the tests are not re-running inside the container.

While this works on macOS (and likely Linux), Jest watchers seem to be completely broken on certain versions of Windows. We are looking into a potential fix or hack to get this working again and will update this note if we find one.

Note - Since the latest release of Create React App and Docker Desktop v2.2 this does not appear to be an issue for Windows Pro or Enterprise users.