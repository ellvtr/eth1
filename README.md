# My First Ethereum Project Ever!
Super simple smart contract with super
simple UI.

## Run locally
The `testrpc` port number is hard-coded in `index.html`;
if you change that port, you need to change the javascript there.

### With Docker
Run a local ethereum test node `testrcp` on default port 8545:
```bash
docker run --name testrpc -d -p 8545:8545 ellvtr/testrpc
# Or use script:
./run_testrpc.sh

```
And a the uber simple frontend e.g. on port 8888:
```bash
docker run --name eth1_front -d -p 8888:8080 ellvtr/eth1_front
# Or use script:
./run_front.sh

```
Try it out on:
http://localhost:8888/

### With NodeJS
Requires NodeJS and `testrpc`, install the latter globally:
```bash
sudo npm install -g ethereumjs-testrpc
```

Run the local test node in a terminal:
```bash
testrpc
```
CD in to this repo, in a new terminal window:
```bash
npm install --production
npm run serv

```
It runs by default on port 8080:
http://localhost:8080/
