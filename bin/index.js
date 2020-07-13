#!/usr/bin/env node

var cp = require("child_process");

var pathVLC = "/mnt/c/datos/software/VLCPortable/App/vlc/vlc.exe";
var sLinkCompleto = process.argv[2];


var nIndice = sLinkCompleto.indexOf("://") + 3;
var sLink = sLinkCompleto.slice(nIndice);

var proxyLink = "http://localhost:8000/pid/" + sLink + "/stream.mp4";

var command = pathVLC + " " + proxyLink;

cp.exec(command);
//console.log(command);
