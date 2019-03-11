# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Starting Angular

In a new terminal window, run `npm start` at the root of the project to compile and start angular services.
You may install the missing packages that are not installed by default such as:
	-> angular-particle,
	-> angular material.
Finally browse to `localhost:4200` to reach the login page.

## Starting the tornado server

In a new terminal window, cd to python_src to find `app.py` that is containing the back-end source code (Python3 tornado)
before running `python3 app.py`, make sure to install all the required packages:
	-> tornado,
	-> json,
	-> chardet,
	-> pandas,
	-> csv.
If any of these packages is/are missing, install it/them using `pip3 install pkg-name`.
Once in the correct directory `./project/python_src/` run `python3 app.py` to launch the server.
Server is launched on localhost port 8888. To make sure it is online, browse to `localhost:8888` in your web browser,
you should see 'Tornado Server Status: ONLINE' message at the top of the page.

## IMPORTANT

IT IS IMPORTANT TO RUN THE SERVER USING `python3`.
IT IS IMPORTANT TO RUN PYTHON SERVER AND ANGULAR CLI IN TWO DISTINCTS TERMINAL
TORNADO MUST BE RUN FROM THE `python_src/` DIRECTORY SO THAT IT CAN CORRECTLY FIND THE USR/PASS DATABASE
ANGULAR SHOULD BE RUN FROM THE ROOT DIRECTORY OF THE PROJECT.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
