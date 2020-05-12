import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosRomanosService {

  constructor() { }

  convertir1(): string {
    return ('I');
  }

  convertir2(): string {
    return ('II');
  }

  convertir3(): string {
    return ('III');
  }

  convertir4(): string {
    return this.convertir1() + this.convertir5();
  }

  convertir5(): string {
    return ('V');
  }

  convertir6(): string {
    return (this.convertir5() + this.convertir1());
  }

  convertir7(): string {
    return (this.convertir5() + this.convertir2());
  }

  convertir8(): string {
    return (this.convertir5() + this.convertir3());
  }

  convertir9(): string {
    return (this.convertir1() + this.convertir10());
  }

  convertir10(): string {
    return ('X');
  }

  convertir50(): string {
    return ('L');
  }

  convertir100(): string {
    return ('C');
  }

  convertir500(): string {
    return ('D');
  }

  convertir1000(): string {
    return ('M');
  }

  transformarUnidades(numero: number, indicador: string): string {
    if (numero === 1) {
      if (indicador === "uni") {
        return this.convertir1();
      } else if (indicador === "dec") {
        return this.convertir10();
      } else if (indicador === "cen") {
        return this.convertir100();
      }
    }

    if (numero === 2) {
      if (indicador === "uni"){
        return this.convertir2();
      } else if (indicador === "dec") {
        return (this.convertir10() + this.convertir10());
      } else if (indicador === "cen") {
        return (this.convertir100() + this.convertir100());
      }
      
    }

    if (numero === 3) {
      if (indicador === "uni"){
        return this.convertir3();
      } else if (indicador === "dec") {
        return (this.convertir10() + this.convertir10() + this.convertir10());
      } else if (indicador === "cen") {
        return (this.convertir100() + this.convertir100() + this.convertir100());
      }
      
    }

    if (numero === 4) {
      if (indicador === "uni"){
        return this.convertir4();
      } else if (indicador === "dec") {
        return (this.convertir10() + this.convertir50());
      } else if (indicador === "cen") {
        return (this.convertir100() + this.convertir500());
      }
    }

    if (numero === 5) {
      if (indicador === "uni"){
        return this.convertir5();
      } else if (indicador === "dec") {
        return (this.convertir50());
      } else if (indicador === "cen") {
        return this.convertir500();
      }
    }

    if (numero === 6) {
      if (indicador === "uni"){
        return this.convertir6();
      } else if (indicador === "dec") {
        return (this.convertir50() + this.convertir10());
      } else if (indicador === "cen") {
        return (this.convertir500() + this.convertir100());
      }
    }

    if (numero === 7) {
      if (indicador === "uni"){
        return this.convertir7();
      } else if (indicador === "dec") {
        return (this.convertir50() + this.convertir10() + this.convertir10());
      } else if (indicador === "cen") {
        return (this.convertir500() + this.convertir100() + this.convertir100());
      }
    }

    if (numero === 8) {
      if (indicador === "uni"){
        return this.convertir8();
      } else if (indicador === "dec") {
        return (this.convertir50() + this.convertir10() + this.convertir10() + this.convertir10());
      } else if (indicador === "cen") {
        return (this.convertir500() + this.convertir100() + this.convertir100() + this.convertir100());
      }
    }

    if (numero === 9) {
      if (indicador === "uni"){
        return this.convertir9();
      } else if (indicador === "dec") {
        return (this.convertir10() + this.convertir100());
      } else if (indicador === "cen") {
        return (this.convertir100() + this.convertir1000());
      }
    }
  }

  convertirRomano(numero: number): string {

    if (numero <= 0 || numero > 1000) {
      return "Ingrese solamente valores entre 1 y 1000";
    }

    if (numero === 1000) {
      return this.convertir1000();
    }
    let indicador = "";
    let unidades = numero % 10;;
    numero = numero / 10;
    let decenas = Math.floor(numero % 10);
    numero = numero / 10;
    let centenas = Math.floor(numero % 10);
    let romanUnidades = "";
    let romanDecenas = "";
    let romanCentenas = "";

    if (unidades !== 0) {
      indicador = "uni";
      romanUnidades = this.transformarUnidades(unidades, indicador);
    }
    if (decenas !== 0) {
      indicador = "dec";
      romanDecenas = this.transformarUnidades(decenas, indicador);
    }
    if (centenas !== 0) {
      indicador = "cen";
      romanCentenas = this.transformarUnidades(centenas, indicador);
    }
    return romanCentenas + romanDecenas + romanUnidades
  }
}
