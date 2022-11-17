import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
  ]
})
export class HomeModule { }
