# node-project
A quick way to setup a new nodejs project according to the team's preferences


## Prerequisites
The following packages are expected to be installed, available and accessible from the PATH
- *Nodejs*
- *NPM* 
- *Git*

## Usage
- If you are looking for a quick and easy way to setup a new project: 

  `npx exmgr/node-project test` where `test` should be the name of your new project

  Be aware that this will cache dependencies so after an update in this project you'll have to clean the cache and rerun above command to get the latest features.
You can clean the cache by running `npx clear-npx-cache`

- If you are looking for a more 'permanent' way to initialize your projects we suggest to donwload and then link the script:
  ```
  git clone exmgr/node-project
  cd node-project
  npm i
  (sudo) npm link
  ```
  After that whenever you are in need of a new node project all you have to do is call `node-project` and optionally pass the path of the new project ie
  `node-project /home/exm/test`
  
  After an update you'll have to update the soft link as well.

