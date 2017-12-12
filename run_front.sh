docker rm -f eth1_front
docker run --name eth1_front -d -p 8888:8080 ellvtr/eth1_front
