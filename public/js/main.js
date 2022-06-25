import {
    kad,
    cactus,
    kev
} from "./classPersonnage.js";


function gererCombat() {

    while (kad.pointDeVie >= 0 && cactus.pointDeVie >= 0) {
        cactus.coupDePoing(kad);
        kad.coupDePoing(cactus);


    };
    if (kad.pointDeVie <= 0) {
        console.log(kad.name + " à perdu le jeu.");
    } else if (cactus.pointDeVie <= 0) {
        console.log(cactus.name + " à perdu.");
    };


    // kad.coupDePoing(cactus);
    // cactus.coupDePoing(kad);


};


gererCombat();




// kdri,kactus,kevina