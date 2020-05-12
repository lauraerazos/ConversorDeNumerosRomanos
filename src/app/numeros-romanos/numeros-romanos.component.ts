import { Component, OnInit } from '@angular/core';
import { NumerosRomanosService } from './../shared/numeros-romanos.service';

@Component({
  selector: 'app-numeros-romanos',
  templateUrl: './numeros-romanos.component.html',
  styleUrls: ['./numeros-romanos.component.css']
})
export class NumerosRomanosComponent implements OnInit {
  numero: any = {}

  constructor(private numerosRomanosService: NumerosRomanosService) { }

  ngOnInit(): void {
  }

  mostrarRomano() {
    if (parseInt(this.numero.arabigo)) {
      this.numero.romano = this.numerosRomanosService.convertirRomano(parseInt(this.numero.arabigo));
    } else {
      this.numero.romano = ""
    }
  }

}
