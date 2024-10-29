import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConversorMoedasService } from '../../services/conversor-moeda/conversor-moedas.service';
import { HistoricoConversoesService } from '../../services/historico-conversao/historico-conversoes.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.css']
})
export class ConversorMoedasComponent implements OnInit {
  moedas: any[] = [];
  moedasFiltradas: any[] = []; 
  moedaOrigem: string = 'BRL';
  moedaDestino: string = 'USD';
  valor: number = 1;
  resultado: number | null = null;
  taxaDeCambio: number | null = null;

  filtroMoedaOrigem: string = '';
  filtroMoedaDestino: string = '';

  @ViewChild('historicoScroll') historicoScroll!: ElementRef;

  constructor(
    private conversorMoedasService: ConversorMoedasService,
    private historicoConversoesService: HistoricoConversoesService
  ) {}

  ngOnInit(): void {
    this.obterMoedas();
  }

  obterMoedas() {
    this.conversorMoedasService.obterMoedasSuportadas().subscribe((moedas) => {
      this.moedas = moedas;
      this.moedasFiltradas = moedas; // Inicializa com todas as moedas
    });
  }

  filtrarMoedas() {
    const filtroOrigem = this.filtroMoedaOrigem.toLowerCase();
    const filtroDestino = this.filtroMoedaDestino.toLowerCase();
    
    this.moedasFiltradas = this.moedas.filter(moeda =>
      moeda.toLowerCase().includes(filtroOrigem) || moeda.toLowerCase().includes(filtroDestino)
    );
  }

  converter(): void {
    if (this.moedaOrigem && this.moedaDestino && this.valor) {
      this.conversorMoedasService.obterConversaoPares(this.moedaOrigem, this.moedaDestino)
        .subscribe(resposta => {
          this.taxaDeCambio = resposta.conversion_rate;
          this.resultado = this.valor * (this.taxaDeCambio ?? 1);
  
          const conversao = {
            data: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
            valorEntrada: this.valor,
            moedaEntrada: this.moedaOrigem,
            valorSaida: this.resultado,
            moedaSaida: this.moedaDestino,
            taxa: this.taxaDeCambio ?? 0,
          };

          this.historicoConversoesService.adicionarConversao(conversao);
        });
    }
  }
}
