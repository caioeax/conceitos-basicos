import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  imports: [ CalculadoraComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = signal('conceitos-basicos');
}
