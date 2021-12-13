# node-project
A quick way to setup a new nodejs project according to the team's preferences


## Prerequisites
- Nodejs available and accessible
- Git installed and accessible

## Usage
- If you are looking for a quick and easy way to setup a new project: 
`npx exmgr/node-project test` where 'test' should be the name of your new project

- If you are looking for a more 'permanent' way to initialize your projects we suggest to donwload and then link the script:
```
git clone exmgr/node-project
cd node-project
npm i
(sudo) npm link
```
After that whenever you are in need of a new node project all you have to do is call `node-project` and optionally pass the path of the new project ie
`node-project /home/exm/test`


