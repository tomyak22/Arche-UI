import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArcheLightComponent } from './arche-light.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ArcheLightComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArcheLightComponent,
    ButtonComponent
  ]
})
export class ArcheLightModule { }
