import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AnimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserModule,
  ]
})
export class AnimeModule { }
