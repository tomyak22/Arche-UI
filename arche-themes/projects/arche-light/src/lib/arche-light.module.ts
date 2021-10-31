import { NgModule } from '@angular/core';
import { ArcheLightComponent } from './arche-light.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ArcheLightComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    ArcheLightComponent,
    ButtonComponent
  ]
})
export class ArcheLightModule { }
