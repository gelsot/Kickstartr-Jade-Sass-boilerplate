# Kickstartr
***
Kickstartr is a boilerplate, folder structure created by [Angel Davcev](https://dribbble.com/Gelsot), for the purpose of quickly serving yourself with a **pug** and  **sass** boilerplate in order to kickstart your next project.
### Install
***
```
$ git clone https://github.com/gelsot/Kickstartr-Jade-Sass-boilerplate.git
```
Or you can download it as [.zip](https://github.com/gelsot/Kickstartr-Jade-Sass-boilerplate/archive/master.zip)
***
### Tools directory
***
This directory is the root for all the procet assets. It's content includes:
* ``` css```
* ``` fonts```
* ```images```
* ```javascript```
* ```pug_includes```

#### CSS directory
***
This directory is where the ```main.sass``` file is located, which compiles to ```main.css```. The ```main.sass``` file is where all the ```.sass``` partial files are linked. 
The ```.sass``` partial files are located in the directories and are named with underscore ```_``` in front, so they can indicate that they are linked to ```main.sass``` and not compiled separately. 
The ```css``` subdirectories include:
* ```basics``` - Vars, fonts, resets, mixins, typography.
* ```components``` - Buttons, wrappers, media objects
* ```pages``` - example: ```_index.sass```, ```_about.sass```
* ```responsive``` - partial files for desktop, tablet and mobile

All styles are compiled and minifyed in ```main.css```.
### Fonts
***
This directory is where all the fonts are stored(```.otf```, ```.ttf``` files). When adding a new font, make sure you declare it in ```tools/css/_fonts.sass``` as a ```@font-face``` with it's properties and correct url from ```tools/fonts/YOUR_FONT.ttf```
### Images
***
In this directory you will add all your images. There is a subdirectory called ```favicons``` where you will store all your favicons, that are linked in the ```head.pug``` file in the ```pug_includes```(my personal logo is provided as an example)
Recomended favicon generator - [Favic-O-Matic](http://www.favicomatic.com/).
### Javascript
***
This is the directory for all your javascripts. There are 2 subdirectories ```vendor``` where you'll add your external javascript libraries. Currently, there are ```jquery.js```, ```TweenMax.js``` and [GSAP's](https://greensock.com/gsap) plugin ```TextPlugin.js```. All the files are concatenated in the ```main.js``` file with [Prepros'](https://prepros.io/) ```//@prepros-prepend``` action. The other file is where the compiled javascript file goes named ```main-dist.js``` which is then uglifyed for faster loading.
### Pug includes
***
Here are the partial pug files which are included in the index. In ```head.pug``` are all the necessary meta tags, including og and twitter meta tags, links to CDN's, including [Font Awesome 4.7.0](https://fontawesome.com/v4.7.0/). In the ```scripts.pug``` is where the ```main-dist.js``` is contained, which is then included in the ```index.pug``` file at the bottom of the page. In the ```components``` directory is a ```mixins.pug``` file, with an example pug mixin which is included in the ```index.pug``` file.
### Summary
***
Enjoy using Kickstartr!