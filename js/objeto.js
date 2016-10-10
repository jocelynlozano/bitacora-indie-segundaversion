function Dormir(hogar, centro){
    this.hogar = hogar;
    this.centro = centro;
    this.bebe = function() {
        alert("Si duermo en " + this.hogar + " mis twins no dejan dormir, pero si duermo en " + this.centro + " no duermo por el codigo.");
    }
};

     var duermo =  new Dormir("casa", "laboratoria");
     duermo.bebe();