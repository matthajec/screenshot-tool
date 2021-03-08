# Screenshot Utility
A simple app that takes a screenshot of a website at a given width and height after some set amount of time (to allow for data to load). I made this for my portfolio where I needed images with populated data and a consistant size.

## Usage
The command is ```node screenshot```, it then takes the params (in order) ```url```,  ```width in px```,  ```height in px```,  and ```wait time in ms```. 
For example, if you wanted to take a 1920x1080 screenshot of the google homepage after one second of loading you would run the command ```node screenshot https://google.com 1920 1080 1000```. Note that the resolution is both the size of the viewport and the size of the outputted image, this might not be good in all use cases (for example if you want to show off a mobile design in a larger-than-mobile format.
