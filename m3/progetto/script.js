var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoChiamataMin = 0.20;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamataTot = minutiDurata * this.costoChiamataMin;
        this.carica -= costoChiamataTot;
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var gennaro = new FirstUser();
gennaro.ricarica(50);
gennaro.chiamata(3);
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoChiamataMin = 0.20;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamataTot = minutiDurata * this.costoChiamataMin;
        this.carica -= costoChiamataTot;
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var alfonso = new SecondUser();
alfonso.ricarica(50);
alfonso.chiamata(3);
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoChiamataMin = 0.20;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamataTot = minutiDurata * this.costoChiamataMin;
        this.carica -= costoChiamataTot;
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var andrea = new ThirdUser();
andrea.ricarica(50);
andrea.chiamata(3);
