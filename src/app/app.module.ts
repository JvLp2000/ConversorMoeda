import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { TabelaMoedasComponent } from './components/TabelaMoedas/TabelaMoedas.component';
import { PaginaInicialComponent } from './components/PaginaInicial/PaginaInicial.component';
import { NavbarComponent } from './components/Navegacao/Navegacao.component';
import { ConversorMoedasComponent } from './components/Conversor/Conversor.component';
import { HistoricoConversoesComponent } from './components/Historico/Historico.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'TabelaMoedas', component: TabelaMoedasComponent },
  { path: 'Conversor', component: ConversorMoedasComponent },
  { path: 'Historico', component: HistoricoConversoesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaMoedasComponent,
    PaginaInicialComponent,
    NavbarComponent,
    ConversorMoedasComponent,
    HistoricoConversoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
