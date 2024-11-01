import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MoedaEnriquecidaService } from '../../services/DetalhesMoeda/DetalhesMoeda.service';

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './TabelaMoedas.component.html',
  styleUrls: ['./TabelaMoedas.component.css']
})
export class TabelaMoedasComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moedaEnriquecidaService: MoedaEnriquecidaService) {}

  ngOnInit(): void {
    this.moedaEnriquecidaService.obterMoedasSuportadas().subscribe(resposta => {
      const moedas = this.formatarMoedas(resposta.supported_codes);
      this.dataSource = new MatTableDataSource(moedas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  formatarMoedas(moedas: [string, string][]): any[] {
    return moedas.map(moeda => {
      return { codigo: moeda[0], nome: moeda[1] };
    });
  }

  aplicarFiltro(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
