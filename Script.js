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

    function createDivBtn(w,h,t,l) {
        let el = document.createElement("div");
        el.style.width = w;
        el.style.height = h;
        el.innerText = t;
        el.style.fontFamily = '"Times New Roman", Times, serif';
        el.style.fontSize = '50px';
        el.style.textAlign = 'center';
        el.style.border = "thick solid black";
        //el.style.display = 'block';
        el.style.margin = 'auto';
        el.style.marginTop = '20px';
        el.style.paddingTop = '30px';
        el.style.padding = 'auto';
        //el.style.background = 'url(https://steamuserimages-a.akamaihd.net/ugc/919165637693659268/E851A42AB2561ADD6728950F1EC043A424CAE7E5/)';
        el.style.backgroundColor = 'red';
        el.style.backgroundSize = 'cover';
        el.addEventListener("click", function(){
            location.href = l;
        });
        return el;
    }


    let body = document.querySelector('body');
    body.style.background = 'grey';
    body.style.display = 'none';
    body.style.background = 'url("https://i.ytimg.com/vi/NcfDsouyG34/maxresdefault.jpg")';
    body.style.backgroundSize = 'cover';



    window.onload=function(){

        let signUp = document.getElementsByClassName('button big')[0];
        let signUpUrl = signUp.getElementsByTagName('a')[0].getAttribute('href');

        let worldsContainers = [], activeWorlds = [], offeredWorlds = [], preLogindWorlds = [];
        try{
            worldsContainers = document.getElementsByClassName('worlds-container');
        }catch(err){
        }

        try{
            activeWorlds = worldsContainers[0].getElementsByClassName('world-select');
        }catch(err){
        }

        try{
            offeredWorlds = worldsContainers[1].getElementsByClassName('world-select');
        }catch(err){
        }

        try{
            preLogindWorlds = worldsContainers[2].getElementsByTagName('a');
        }catch(err){
        }


        document.body.innerHTML = "";
        body.style.display = 'block';

        let mainDiv = document.createElement("div");

        mainDiv.id = "myDiv";
        mainDiv.style.width = '100vw';
        mainDiv.style.height = '100vh';
        //el.style.background = 'red';
        mainDiv.style.cursor = "url('http://bringerp.free.fr/Files/RotMG/cursor.gif'), auto";
        body.appendChild(mainDiv);

        let btnWidth = 400;
        let btnHeight = 100;
        let activeWorldsBtn = [];
        let offeredWorldsBtn = [];
        let preLogindWorldsBtn = [];

        for(let i = 0; i < activeWorlds.length; i++){
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', activeWorlds[i].innerText,activeWorlds[i].getAttribute('href'));
            mainDiv.append(d);
            activeWorldsBtn.push(d);
        }

        for(let i = 0; i < offeredWorlds.length; i++){
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', offeredWorlds[i].innerText,offeredWorlds[i].getAttribute('href'));
            mainDiv.append(d);
            offeredWorldsBtn.push(d);
            if(i>=2) d.style.display = 'none';
        }

        for(let i = 0; i < preLogindWorlds.length; i++){
            console.log(1);
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', preLogindWorlds[i].innerText,preLogindWorlds[i].getAttribute('href'));
            mainDiv.append(d);
            preLogindWorldsBtn.push(d);
        }

        /*let btn = document.createElement("div");
        btn.style.width = '455px';
        btn.style.height = '127px';
        //btn.innerText = 'Kliknij mnie';
        btn.style.border = 'none';
        btn.style.display = 'block';
        btn.style.margin = '0 auto';
        btn.style.paddingTop = '100px';
        btn.style.background = 'url(https://steamuserimages-a.akamaihd.net/ugc/919165637693659268/E851A42AB2561ADD6728950F1EC043A424CAE7E5/)';
        body.style.backgroundSize = 'cover';
        el.append(btn);*/
    };




})();
