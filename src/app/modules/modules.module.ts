import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime/anime.component';
import { MangaComponent } from './manga/manga.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AnimeComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ModulesModule { }
