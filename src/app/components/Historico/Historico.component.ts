import { Component, OnInit } from '@angular/core';
import { HistoricoConversoesService } from '../../services/HistoricoConversao/HistoricoConversao.service';
@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './Historico.component.html',
  styleUrls: ['./Historico.component.css']
})
export class HistoricoConversoesComponent implements OnInit {
  historico: any[] = [];

  constructor(private historicoConversoesService: HistoricoConversoesService) {}

  ngOnInit(): void {
    this.historicoConversoesService.getHistoricoObservable().subscribe((novoHistorico) => {
      this.historico = novoHistorico;
    });
  }

  excluirConversao(index: number): void {
    this.historicoConversoesService.excluirConversao(index);
  }
}
