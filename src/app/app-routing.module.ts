import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((xd) => xd.HomeModule)
  },
  {
    path: 'life',
    component: LifeCycleComponent
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
