// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.plemiona.pl/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideDiv(el) {
        el.style.display = 'none';
    }

    function newPosition(el, x, y){
        el.style.position = 'absolute';
        el.style.left = x;
        el.style.top = y;
    }


    let body = document.querySelector('body');
    body.style.background = 'grey';
    body.style.background = 'url("https://i.ytimg.com/vi/NcfDsouyG34/maxresdefault.jpg")';
    body.style.backgroundSize = 'cover';
    body.style.display = 'none';



    window.onload=function(){

        let signUp = document.getElementsByClassName('button big')[0];
        let signUpUrl = signUp.getElementsByTagName('a')[0].getAttribute('href');

        let worldsContainers = document.getElementsByClassName('worlds-container');
        let activeWorlds = worldsContainers[0].getElementsByClassName('world-select');
        let offeredWorlds = worldsContainers[1].getElementsByClassName('world-select');
        let preLogindWorlds = worldsContainers[2].getElementsByClassName('world-select');

        document.body.innerHTML = "";
        body.style.display = 'block';

        let el = document.createElement("div");

        el.id = "myDiv";
        //el.innerText = "Tekst w divie";
        //el.setAttribute("title", "To jest tekst w dymku");
        //el.classList.add("module");
        el.style.width = '100vw';
        el.style.height = '100vh';
        //el.style.background = 'red';
        body.appendChild(el);


        let btn = document.createElement("BUTTON");
        btn.style.width = '455px';
        btn.style.height = '127px';
        //btn.innerText = 'Kliknij mnie';
        btn.style.border = 'none';
        btn.style.display = 'block';
        btn.style.margin = '0 auto';
        btn.style.paddingTop = '100px';
        btn.style.background = 'url(https://steamuserimages-a.akamaihd.net/ugc/919165637693659268/E851A42AB2561ADD6728950F1EC043A424CAE7E5/)';
        body.style.backgroundSize = 'cover';
        el.append(btn);
    };




})();