import {
    kad,
    cactus,
    kev
} from "./classPersonnage.js";


function gererCombat() {

    while (kad.pointDeVie > 0 && cactus.pointDeVie > 0) {
        cactus.coupDePoing(kad);
        if (kad.pointDeVie < 0) {
            kad.pointDeVie = 0;
        } else {
            console.log(kad.name + " a perdu 30 PDV mnt son PDV = " + kad.pointDeVie);

            kad.coupDePoing(cactus);
            if (cactus.pointDeVie < 0) {
                cactus.pointDeVie = 0;
            } else {
                console.log(cactus.name + " a perdu 30 PDV mnt son PDV = " + cactus.pointDeVie);
            };
        };


    };
    if (kad.pointDeVie <= 0) {
        console.log(kad.name + " à perdu le jeu.");
    } else if (cactus.pointDeVie <= 0) {
        console.log(cactus.name + " à perdu.");
    };



    // kad.coupDePoing(cactus);
    // cactus.coupDePoing(kad);


};

// gererCombat();

// partie DOM
let body = document.querySelector('body');

//selection des id de players
let col1p1 = document.querySelector('#col1p1');
let col1k1 = document.querySelector('#col1k1');

//player1
let punchP1 = document.querySelector("#p1p");
let kickp1 = document.querySelector("#p1k");

punchP1.addEventListener("click", function () {
    let divRowP = document.createElement("div");
    divRowP.style.textAlign="center";

    col1p1.append(divRowP);
    cactus.coupDePoing(kad);
    if (kad.pointDeVie < 0) {
        kad.pointDeVie = 0;
    } else {
        divRowP.innerHTML += (kad.name + " a perdu 30 PDV mnt son PDV = " + kad.pointDeVie);
    };
    if (kad.pointDeVie <= 0) {
        divRowP.innerHTML =(kad.name + " à perdu le jeu.");

    };

});

kickp1.addEventListener("click", function () {
    let divRowK = document.createElement("div");
    col1k1.append(divRowK);
    cactus.coupDePied(kad);
    if (kad.pointDeVie < 0) {
        kad.pointDeVie = 0;
    } else {
        divRowK.innerHTML += (kad.name + " a perdu 50 PDV mnt son PDV = " + kad.pointDeVie);
    };
    if (kad.pointDeVie <= 0) {
        divRowK.innerHTML =(kad.name + " à perdu le jeu.");
    };

});

//player 2 
let col1p2 = document.querySelector("#col1p2");
let col1k2 = document.querySelector("#col1k2");

let punchP2 = document.querySelector("#p2p");
let kickp2 = document.querySelector("#p2k");

punchP2.addEventListener("click", function () {
    let divRowPp2 = document.createElement("div");
    col1p2.append(divRowPp2);
    kad.coupDePoing(cactus);
    if (cactus.pointDeVie < 0) {
        cactus.pointDeVie = 0;
    } else {
        divRowPp2.innerHTML += (cactus.name + " a perdu 30 PDV mnt son PDV = " + cactus.pointDeVie);
    };
    if (cactus.pointDeVie <= 0) {
        divRowPp2.innerHTML =(cactus.name + " à perdu le jeu.");
    };
});

kickp2.addEventListener("click", function () {
    let divRowKp2 = document.createElement("div");
    col1k2.append(divRowKp2);
    kad.coupDePied(cactus);
    if (cactus.pointDeVie < 0) {
        cactus.pointDeVie = 0;
    } else {
        divRowKp2.innerHTML += (cactus.name + " a perdu 50 PDV mnt son PDV = " + cactus.pointDeVie);
    };
    if (cactus.pointDeVie <= 0) {
        divRowKp2.innerHTML =(cactus.name + " à perdu le jeu.");
    };
    
});

//fin de la partie DOM