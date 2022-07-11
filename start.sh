#!/bin/bash
cd /home/ubuntu/dlatldhs/server
pm2 stop all
pm2 start index.js