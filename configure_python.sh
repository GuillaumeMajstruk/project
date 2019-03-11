#!/bin/sh 
#this script purpose is to install python dependencies prior to launch the tornado server
#make sure that pip3 is installed on your system

#installing brew if not installed
sudo /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#installing python3 and so pip3 if not installed
brew install python3

#installing dependencies
pip3 install tornado
pip3 install chardet
pip3 install pandas
pip3 install xlrd

#eof
