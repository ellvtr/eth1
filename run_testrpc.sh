docker rm -f testrpc
docker run --name testrpc -d -p 8545:8545 ellvtr/testrpc
# docker run --name testrpc -d -p 8545:8545 harshjv/testrpc
