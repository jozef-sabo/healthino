import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const materialComponents = [
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  exports: [
    materialComponents,
  ],
  imports: [
    CommonModule,
    materialComponents
  ]
})
export class MaterialModule { }
