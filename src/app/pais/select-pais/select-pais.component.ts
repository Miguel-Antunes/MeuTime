import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-select-pais',
  templateUrl: './select-pais.component.html',
  styleUrls: ['./select-pais.component.css']
})
export class SelectPaisComponent {

  title = 'MeuTime';
  itens: MenuItem[] = [];
  home: MenuItem = {};

  onItemClick() {
    console.log(event?.returnValue)
  }
  ngOnInit() {
    this.home = {
      routerLink: '/'
    }
    this.itens = [{ label: 'Selecione o País', routerLink: '/pais' }, { label: 'Temporada' }, { label: 'Liga' }, { label: 'Time' }];
  }
}