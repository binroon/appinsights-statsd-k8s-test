#! /bin/sh

set -eux
apt-get update | true
apt-get -qy upgrade | true
add-apt-repository universe
apt-get update | true
apt install python3-pip


# Install the telegraf package using the apt command below.
sudo apt install telegraf -y
# After the installation is complete, start the telegraf service and enable it to launch everytime at system startup.
sudo systemctl start telegraf
sudo systemctl enable telegraf

# The telegraf agent is up and running, check it using the command below.
sudo systemctl status telegraf

# Configure Telegraf
cd /etc/telegraf/
mv telegraf.conf telegraf.conf.default


export AIRFLOW_HOME=~/airflow
sudo pip3 install apache-airflow

sudo airflow initdb

sudo airflow webserver -p 8080
sudo airflow scheduler
sudo pip3 install 'apache-airflow[statsd]'

cd ~/airflow
#cat airflow.cfg
#change 'statsd_on' value to 'true'
