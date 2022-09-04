interface ISmartphone {
    carica:number;
    numeroChiamate:number;
    costoChiamataMin:number;

    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}

class FirstUser implements ISmartphone {
    carica:number;
    numeroChiamate:number;
    costoChiamataMin:number;

    ricarica(unaRicarica:number):void {
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void {
        let costoChiamataTot = minutiDurata * this.costoChiamataMin
        this.carica -= costoChiamataTot 
        this.numeroChiamate++
    }

    numero404():number {
        return this.carica
    }

    getNumeroChiamate():number {
        return this.numeroChiamate
    }
    
    azzeraChiamate():void {
        this.numeroChiamate = 0
    }

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoChiamataMin = 0.20
    }
}

let gennaro = new FirstUser()
gennaro.ricarica(50)
gennaro.chiamata(3)

class SecondUser implements ISmartphone {
    carica:number;
    numeroChiamate:number;
    costoChiamataMin:number;

    ricarica(unaRicarica:number):void {
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void {
        let costoChiamataTot = minutiDurata * this.costoChiamataMin
        this.carica -= costoChiamataTot 
        this.numeroChiamate++
    }

    numero404():number {
        return this.carica
    }

    getNumeroChiamate():number {
        return this.numeroChiamate
    }
    
    azzeraChiamate():void {
        this.numeroChiamate = 0
    }

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoChiamataMin = 0.20
    }
}

let alfonso = new SecondUser()
alfonso.ricarica(50)
alfonso.chiamata(3)

class ThirdUser implements ISmartphone {
    carica:number;
    numeroChiamate:number;
    costoChiamataMin:number;

    ricarica(unaRicarica:number):void {
        this.carica += unaRicarica
    }

    chiamata(minutiDurata:number):void {
        let costoChiamataTot = minutiDurata * this.costoChiamataMin
        this.carica -= costoChiamataTot 
        this.numeroChiamate++
    }

    numero404():number {
        return this.carica
    }

    getNumeroChiamate():number {
        return this.numeroChiamate
    }
    
    azzeraChiamate():void {
        this.numeroChiamate = 0
    }

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoChiamataMin = 0.20
    }
}

let andrea = new ThirdUser()
andrea.ricarica(50)
andrea.chiamata(3)




