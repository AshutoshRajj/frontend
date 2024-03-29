# CloudFrame License Manager Forntend Application
The Frontend app serves as GUI for the Customerry product.

## Setup Guide in development environment
* Install Node Js and Yarn
* Open a command terminal/command line prompt in the root directory.
* In the terminal execute 'yarn' command. It will resolve project dependencies.
* In Unix based OS and Mac OS, execute 'yarn start' command to start the server.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Production Environment Setup
## Setup via docker container
* Build docker image
- In Windows
docker build -t ghcr.io/cloudframe/cf_customerry_ui_prod:V1.0.0.0 -f DockerfileWin .
docker build -t ghcr.io/cloudframe/cf_customerry_ui_qa:V1.0.0.0 -f DockerfileWin .
- In non-windows OS
docker build -t ghcr.io/cloudframe/cf_customerry_ui_prod:V1.0.0.0 -f Dockerfile .
docker build -t ghcr.io/cloudframe/cf_customerry_ui_qa:V1.0.0.0 -f Dockerfile .
* Push the image to repository
docker push ghcr.io/cloudframe/cf_customerry_ui_prod:V1.0.0.0
docker push ghcr.io/cloudframe/cf_customerry_ui_qa:V1.0.0.0

## Deploy via docker container
* Run container from images - 
docker stop cf_customerry_ui_prod
docker rm cf_customerry_ui_prod
docker pull ghcr.io/cloudframe/cf_customerry_ui_prod:V1.0.0.0
docker run --name cf_customerry_ui_prod -d -e NODE_ENV=production -p 6993:80 ghcr.io/cloudframe/cf_customerry_ui_prod:V1.0.0.0

docker stop cf_customerry_ui_qa
docker rm cf_customerry_ui_qa
docker pull ghcr.io/cloudframe/cf_customerry_ui_qa:V1.0.0.0
docker run --name cf_customerry_ui_qa -d -e NODE_ENV=staging -p 6992:80 ghcr.io/cloudframe/cf_customerry_ui_qa:V1.0.0.0

## Setup in VM
* Install Node JS. More details in https://nodejs.org/en
* Install yarn package manager using - `npm i -g yarn`
* Install pm2 package manager using - `npm i -g pm2`
* Under root user create folder workspace and `cd workspace`
* Execute `git clone https://github.com/cloudframe/cf_internal_ui_license_manager.git`


## Deployment in VM
In production environment, we utilize process manager (PM2) library. For more details on PM2, please visit https://pm2.keymetrics.io/. The following scripts deploy in production environment.

##### 1. `sudo -i`
If the logged in user is not root user, this command gains access to root user directories and processes. For root user this is not necessary.

##### 2. `pm2 kill`
Stops and cleans up existing processes. May fail if 
##### 3. `cd workspace/cf_internal_ui_license_manager/`
Access to working directory.
##### 4. `git pull`
Retrieve the changes made in repository.
##### 5. `yarn`
Installs project-specific dependencies inside the workspace.
##### 6. `yarn start:production`
Builds and start the server via PM2.