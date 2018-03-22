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

    function createDiv(w,h){
        let el = document.createElement("div");
        el.style.width = w;
        el.style.height = h;
        return el;
    }

    function createDivBtn(w,h,t,l,c) {
        let el = createDiv(w,h);
        el.innerText = t;
        el.style.fontFamily = '"Times New Roman", Times, serif';
        el.style.color = c;
        el.style.fontSize = '30px';
        el.style.textAlign = 'center';
        //el.style.border = "thick solid black";
        //el.style.display = 'block';
        el.style.marginLeft = 'auto';
        el.style.marginRight = 'auto';
        el.style.marginTop = '15px';
        el.style.paddingTop = '20px';
        //el.style.padding = 'auto';
        el.style.background = 'url("https://lh5.googleusercontent.com/S2RYWMrV9VakH8ndNCKpi91VbPaZ7rBjsMIF0lkNVdU6RwXgATHXPPaZusvsGt-_oNFUkSWjh3Eef3nDq-Hd=w1920-h932")';
        el.style.backgroundColor = 'red';
        el.style.backgroundSize = 'cover';
        el.addEventListener("click", function(){
            location.href = l;
        });
        return el;
    }


    let body = document.querySelector('body');
    body.style.backgroundColor = 'grey';
    body.style.display = 'none';
    //body.style.background = 'url("https://i.ytimg.com/vi/NcfDsouyG34/maxresdefault.jpg")';
    body.style.backgroundSize = 'cover';
    body.style.margin = '0px';
    body.style.paddingTop = '0px';



    window.onload=function(){

        let signUp = document.getElementsByClassName('button big')[0];
        let signUpUrl = signUp.getElementsByTagName('a')[0].getAttribute('href');

        let worldsContainers = [], activeWorlds = [], offeredWorlds = [], preLogindWorlds = [], small = [];
        try{
            worldsContainers = document.getElementsByClassName('worlds-container');
        }catch(err){}

        try{
            activeWorlds = worldsContainers[0].getElementsByClassName('world-select');
        }catch(err){}

        try{
            offeredWorlds = worldsContainers[1].getElementsByClassName('world-select');
        }catch(err){}

        try{
            preLogindWorlds = worldsContainers[2].getElementsByTagName('a');
        }catch(err){}

        try{
            small = document.getElementByClassName('small');
        }catch(err){}


        document.body.innerHTML = "";
        body.style.display = 'block';

        let mainDiv = document.createElement("div");
        mainDiv.id = "myDiv";
        mainDiv.style.width = '100vw';
        mainDiv.style.height = '100vh';
        mainDiv.style.background = 'red';
        mainDiv.style.display = 'flex';
        mainDiv.style.cursor = "url('https://lh6.googleusercontent.com/qPliEEko65R5fS2DZ8Jw8gz3xtFhtjfI_B6L-UHQHj8o7blp9GjDiwjAI9mu12iEu9esPtHVmpNOXQqhP4oD=w1920-h932'), auto";
        body.appendChild(mainDiv);

        let btnWidth = 361;
        let btnHeight = 56;
        let activeWorldsBtn = [];
        let offeredWorldsBtn = [];
        let preLogindWorldsBtn = [];


        let leftDiv = document.createElement('div');
        leftDiv.style.backgroundColor = 'blue';
        leftDiv.style.flex = '1';
        mainDiv.append(leftDiv);

        let menuDiv = document.createElement('div');
        menuDiv.style.width = btnWidth+'px';
        menuDiv.style.backgroundColor = 'white';
        menuDiv.style.flex = '2';
        menuDiv.style.display = 'flex';
        menuDiv.style.flexBasis = btnWidth + 'px';
        menuDiv.style.flexDirection = 'column';
        menuDiv.style.justifyContent = 'center';
        menuDiv.style.alignItems = 'center';
        mainDiv.append(menuDiv);

        let rightDiv = document.createElement('div');
        rightDiv.style.backgroundColor = 'green';
        rightDiv.style.flex = '3';
        mainDiv.append(rightDiv);

        for(let i = 0; i < activeWorlds.length; i++){
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', activeWorlds[i].innerText,activeWorlds[i].getAttribute('href'),'#ffff00');
            menuDiv.append(d);
            activeWorldsBtn.push(d);
        }

        for(let i = 0; i < offeredWorlds.length; i++){
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', offeredWorlds[i].innerText,offeredWorlds[i].getAttribute('href'),'#ffffcc');
            menuDiv.append(d);
            offeredWorldsBtn.push(d);
            if(i>=2) d.style.display = 'none';
        }

        for(let i = 0; i < preLogindWorlds.length; i++){
            console.log(1);
            let d = createDivBtn(btnWidth+'px', btnHeight+'px', preLogindWorlds[i].innerText,preLogindWorlds[i].getAttribute('href'),'#c2c2a3');
            menuDiv.append(d);
            preLogindWorldsBtn.push(d);
        }

        let logout = createDiv('62px','79px');
        logout.style.backgroundImage = 'url("https://lh3.googleusercontent.com/SFSEZ9BTzVzcZPqJUvY1ckqF5CaIf7oVs8CoLz9Hk6ZTKkJgfwc_M7Svk8XabEj8AiUZMV6M2fwbsS0KxWIT=w1920-h932")';
        logout.style.backgroundSize = 'cover';
        logout.style.position = 'absolute';
        logout.style.bottom = '20px';
        logout.style.left = '20px';

        leftDiv.append(logout);



    };




})();
