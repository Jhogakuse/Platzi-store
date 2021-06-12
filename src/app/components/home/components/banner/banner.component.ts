import { Component, OnInit } from '@angular/core';
import { ImgBanner } from '../../../../models/imgBanner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  images: ImgBanner[] = [
    {
      url: 'assets/images/banner-1.jpg',
      alt: 'img1'
    },
    {
      url: 'assets/images/banner-2.jpg',
      alt: 'img2'
    },
    {
      url: 'assets/images/banner-3.jpg',
      alt: 'img3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
