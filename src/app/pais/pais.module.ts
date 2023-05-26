import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPaisComponent } from './select-pais/select-pais.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    SelectPaisComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    BreadcrumbModule
  ]
})
export class PaisModule { }
