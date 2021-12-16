import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/entities/anime/anime';

@Component({
  selector: 'app-infowidget',
  templateUrl: './infowidget.component.html',
  styleUrls: ['./infowidget.component.css']
})
export class InfowidgetComponent implements OnInit {

  @Input() anime!: Anime;

  constructor() { }

  ngOnInit(): void {
  }

}
