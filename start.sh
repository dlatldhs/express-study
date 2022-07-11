#!/bin/bash
cd /home/ubuntu/express-study
pm2 stop all
pm2 start index.js