# MOVIE APP

To run app in development locally run:

```
npm run dev
```

### To build and serve app on your local machine firstly check if you have docker installed:

```
docker version
```

_if you don't have docker you will need to install it, go to this url - https://www.docker.com/get-started/_

### If you have docker you will need to build an docker image for app environment, open the terminal/powershell in projects folder and run this command:

```
docker build -t movie-app .
```

### When build process is finished you will need to run you app in docker container that is using that image, for that run this command:

```
docker run -d -p 3001:80 movie-app
```

#### When you see a id below the command your container is up and running!

#### Now you can access this app on: http://localhost:3001
