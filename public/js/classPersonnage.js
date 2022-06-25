let kad = {
    lastName: 'Khadri',
    name: 'Hamza',
    pointDeVie: 400,
    tabDegatKad: [],
    coupDePoing(enemie) {

        // while(enemie.pointDeVie==30){


        enemie.pointDeVie -= 30;
        // if(enemie.pointDeVie>=20){
        console.log(enemie.name + " a perdu 30 PDV mnt son PDV= " + enemie.pointDeVie);
        // }else{
        //     console.log(enemie.name + " a perdu cette fois");
        // }
        // };
    },

    coupDePied(enemie) {
        enemie.pointDeVie -= 50;
        console.log(enemie.name + " a perdu 50 PDV mnt son PDV = " + enemie.pointDeVie);
    },
    superSayain(playerItSelf) {
        if (playerItSelf.pointDeVie == (0.3 * this.pointDeVie)) {
            playerItSelf.pointDeVie = playerItSelf.pointDeVie + (this.tabDegatKad * 2);
            console.log(" voial le PDV de KAD après le superSayain = " + playerItSelf.pointDeVie);
        }
    },

}

let cactus = {
    lastName: 'Momo',
    name: 'Cactus',
    pointDeVie: 600,
    tabDegatCactus: [],
    coupDePoing(enemie) {
        enemie.pointDeVie -= 30;
        console.log(enemie.name + " perdu 30 PDV mnt son PDV = " + enemie.pointDeVie);
    },

    coupDePied(enemie) {
        return enemie.pointDeVie -= 50;
        console.log(enemie.name + " a perdu 50 PDV mnt son PDV = " + enemie.pointDeVie);
    },
    epines() {

    },
}


let kev = {
    lastName: 'Assiato',
    name: 'Kevin',
    pointDeVie: 300,
    tabDegatKev: [],
    coupDePoing(enemie) {
        enemie.pointDeVie -= 30;
        console.log(enemie.name + " a perdu 30 PDV mnt son PDV = " + enemie.pointDeVie);
    },

    coupDePied(enemie) {
        enemie.pointDeVie -= 50;
        console.log(enemie.name + " a perdu 50 PDV mnt son PDV = " + enemie.pointDeVie);
    },
    dodo() {

    },
}


export {
    kad,
    cactus,
    kev
};
















// class Personnage{
//     constructor(lastName,name,poitDeVie){
//         this.lastName = lastName;
//         this.name = name;
//         this.poitDeVie = poitDeVie;
//     }
//     coupDePoing() {

//     }

//     coupDePied() {

//     }

//     attaqueSpecial() {

//     }


// }