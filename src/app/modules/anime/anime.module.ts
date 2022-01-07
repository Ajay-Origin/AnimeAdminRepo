import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AnimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatIconModule,
  ]
})
export class AnimeModule { }
