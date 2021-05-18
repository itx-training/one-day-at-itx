import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsValueFilterableDirective } from './is-value-filterable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IsValueFilterableDirective],
  exports:  [IsValueFilterableDirective, FormsModule]
})
export class SharedModule { }
