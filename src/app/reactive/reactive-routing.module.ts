import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'basic', component: BasicPagesComponent},
      {path:'dynamic', component: DinamicPageComponent},
      {path:'switches', component: SwitchesPageComponent},
      {path: '**' , redirectTo: 'basic'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
