import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ComponentsModule } from './shared/components/components.module';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
