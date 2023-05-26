import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'MeuTime';
  itens: MenuItem[] = [];
  home: MenuItem = {};

  onItemClick() {
    console.log()
  }

  ngOnInit() {
    this.home = {
      routerLink: '/'
    }
    this.itens = [{ label: 'Selecione o País' }, { label: 'Temporada' }, { label: 'Liga' }, { label: 'Time' }];
  }
}