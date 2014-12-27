Arma3Spotter
============

[![](http://img.shields.io/travis/KoffeinFlummi/Arma3Spotter.svg?style=flat)](https://travis-ci.org/KoffeinFlummi/Arma3Spotter)


### Setup

**Requires NodeJS, NPM, Bower and Grunt (grunt-cli).**

```shell
cd src
npm install
bower install
grunt serve
```

### Building App Packages

**Requires OSX & XCode & XCode Command Line Tools**

```shell
cd src
grunt build
grunt buildCordova
```


### Preview

Note: Be warned, this is the development version. Not everything might work.
(It's developed mobile-first, so it might look better on a smartphone)

http://koffeinflummi.github.io/Arma3Spotter/

![preview](https://cloud.githubusercontent.com/assets/1235520/5546924/456743f0-8b4e-11e4-9556-c0c96a17729f.jpg)


### Adding More Weapons/Mods

If one of the mods you play with isn't included or has outdated data, you can help by adding it! There's an [export script](https://www.github.com/KoffeinFlummi/Arma3Spotter/blob/master/export.sqf) included, which - when run while holding the weapon you want to add - will copy the relevant data and further instructions to your clipboard.

Then you just have to create a pull request with your changes.
