import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somar(): void {
    console.log("chamando metodo somar");
    console.log("Número 1:", this.numero1);
    console.log("Número 2:", this.numero2);
    this.resultado = this.numero1 + this.numero2; 
  }
}
