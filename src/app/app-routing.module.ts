import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexPage } from './Pages/index/index.page';
import { HomePage } from './Pages/home/home.page';
import { MovimentacoesPage } from './Pages/movimentacoes/movimentacoes.page';
import { DadosPage } from './Pages/dados/dados.page';

const routes: Routes = [];
routes.push({path: "", component: AppComponent, });
routes.push({path: "app", component: IndexPage});
routes.push({path: "home", component: HomePage, children: [
  { path: "operacoes", component: MovimentacoesPage},
  { path: "dados", component: DadosPage},
]});
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
