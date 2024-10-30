import { Component } from '@angular/core';

@Component({
  selector: 'app-PaginaInicial',
  templateUrl: './PaginaInicial.component.html',
  styleUrls: ['./PaginaInicial.component.css']
})
export class PaginaInicialComponent {
  title = 'Bem-vindo ao Conversor de Moedas';
  descricao = 'Esta aplicação permite converter valores entre diferentes moedas. Utilize a tabela de conversão para ver as taxas de câmbio atuais.';
}
