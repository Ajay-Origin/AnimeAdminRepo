import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/entities/anime/anime';
import { AnimeService } from 'src/app/modules/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  public allTimeAiringanimeList: Anime[] = [];
  public numberOfSlides: number = 0;
  public animeItemsPerSlide: number = 6;
  constructor(public animeApiService: AnimeService, router: Router) { }

  ngOnInit(): void {
    this.loadAllTimeAiringAnime();
    this.numberOfSlides = this.allTimeAiringanimeList.length % this.animeItemsPerSlide === 0 ? this.allTimeAiringanimeList.length / this.animeItemsPerSlide : (this.allTimeAiringanimeList.length / this.animeItemsPerSlide) + 1
  }
  private loadAllTimeAiringAnime() {
    return this.animeApiService.getEmployees().subscribe((data: any) => {
      this.allTimeAiringanimeList = data.top as Anime[];
    })
  }
}
