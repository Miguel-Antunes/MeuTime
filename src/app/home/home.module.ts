import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisModule } from '../pais/pais.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { HomeComponent } from './home.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaisModule,
    ButtonModule,
    CardModule,
    BreadcrumbModule,
    InputTextModule
  ]
})
export class HomeModule { }
