import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AnimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
  ]
})
export class AnimeModule { }
