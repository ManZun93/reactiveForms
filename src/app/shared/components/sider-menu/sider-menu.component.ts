import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;

}

@Component({
  selector: 'shared-sider-menu',
  templateUrl: './sider-menu.component.html',
  styles: [
  ]
})
export class SiderMenuComponent {

public reactiveMenu: MenuItem[] = [
  {title: 'Basicos', route: './reactive/basic'},
  {title: 'Dinamicos', route: './reactive/dynamic'},
  {title: 'Switches', route: './reactive/switches'},

];

public authMenu: MenuItem[] = [
  {title: 'Registro', route: './auth'},


]


}
