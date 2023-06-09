import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { HomeModule } from './home/home.module';

@NgModule(
  {
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      HomeModule,
      PaisModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
