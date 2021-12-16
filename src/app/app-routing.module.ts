import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AnimeComponent } from './modules/anime/anime.component';
import { MangaComponent } from './modules/manga/manga.component';

const routes: Routes = [
  { path: '', component: DefaultComponent,
children: [
 { path: 'anime', component: AnimeComponent },
{ path: 'manga', component: MangaComponent },] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
