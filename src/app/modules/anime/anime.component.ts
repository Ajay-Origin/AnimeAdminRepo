import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/entities/anime/anime';
import { AnimeService } from 'src/app/modules/anime.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  public allTimeAiringanimeList: Anime[] = [];
  public numberOfSlides: number = 0;
  public animeItemsPerSlide: number = 5;
  public numbers: number[] = [];
  public carousal: any = '';
  constructor(public animeApiService: AnimeService, router: Router) {
      this.numbers = Array(5).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
    var myCarousel = document.querySelector('#carouselExampleControls');
    const bootstrap = require('bootstrap');
    this.carousal = new bootstrap.Carousel(myCarousel, {
      interval: false,
      wrap: true
  });
  this.loadAllTimeAiringAnime();
  }
  
  ngDoCheck() {
  this.numberOfSlides = this.allTimeAiringanimeList.length % this.animeItemsPerSlide === 0 ? this.allTimeAiringanimeList.length / this.animeItemsPerSlide : Math.floor(this.allTimeAiringanimeList.length / this.animeItemsPerSlide) + 1;
  }
  private loadAllTimeAiringAnime() {
    return this.animeApiService.getEmployees().subscribe((data: any) => {
      this.allTimeAiringanimeList = data.top as Anime[];
    });
  }
  //function to return list of numbers from 0 to n-1
  getNumberOfSlides(): Array<number> {
    return Array(this.numberOfSlides);
  }
  getAnimeListForNthSlide(slideIndex: number) {
    return this.allTimeAiringanimeList.slice(slideIndex * this.animeItemsPerSlide, (slideIndex * this.animeItemsPerSlide) + this.animeItemsPerSlide);
  }
  nextSlide() {
    this.carousal.next();
  }
  previousSlide() {
    this.carousal.prev();
  }
}
