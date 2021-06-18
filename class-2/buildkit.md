# Buildkit

Most students who have the most recent versions of Docker will now have "Buildkit" enabled by default. If so, you will notice a slightly different output in your terminal when building from a Dockerfile.

The main difference for students will be the final step in the build process. As shown in the lecture the last step would say:

---> fc60771eaa08
Successfully Built fc60771eaa08
 
Now, with Buildkit, the final step would say:

 => => exporting layers                                                      
0.0s => => writing image sha256:ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921  0.0s
 
Both fc60771eaa08 and ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921 are the resulting image ID's that you would use to run a container.

eg:

docker run fc60771eaa08
or

docker run ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921


Disabling Buildkit to match course output

If you wish to disable the Buildkit feature so that you can more accurately follow along with the course, do the following:

Click the Docker Icon your systray

Select "Preferences"

Select "Docker Engine"

Change buildkit from true to false

{
  "features": {
    "buildkit": false
  },
  "experimental": false
}
Apply and Restart.

Buildkit Features and Documentation

If you want to learn more about features Buildkit has to offer, please check out the following pages:

https://docs.docker.com/develop/develop-images/build_enhancements/

https://docs.docker.com/engine/reference/commandline/build/#specifying-external-cache-sources

https://www.docker.com/blog/advanced-dockerfiles-faster-builds-and-smaller-images-using-buildkit-and-multistage-builds/