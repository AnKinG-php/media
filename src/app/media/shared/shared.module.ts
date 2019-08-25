import { IonicModule } from '@ionic/angular';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../shared/pipes/sanitize-html.pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [SanitizeHtmlPipe, FilterPipe, SortPipe],
  entryComponents: [],
  exports: [
    IonicModule,
    CommonModule,
    SanitizeHtmlPipe,
    FormsModule, ReactiveFormsModule,
    FilterPipe,
    SortPipe
  ]
})
export class SharedModule { }
