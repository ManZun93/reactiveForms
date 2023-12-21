import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderMenuComponent } from './components/sider-menu/sider-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SiderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SiderMenuComponent
  ]
})
export class SharedModule { }
