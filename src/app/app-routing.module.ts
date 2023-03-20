import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListaSeguroComponent } from './components/lista-seguro/lista-seguro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro'},
  { path: 'cadastro', component: CadastroSeguroComponent },
  { path: 'lista', component: ListaSeguroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
