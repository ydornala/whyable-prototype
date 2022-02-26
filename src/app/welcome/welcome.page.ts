import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  slides = [
    {
      image: '../../assets/img/LOGO-MA.svg',
      caption: 'Expore Maps',
      subCaption: 'with a different perspective',
    },
    {
      image: '../../assets/img/LOGO-PI.svg',
      caption: 'Create & Share',
      subCaption: 'your own emotion reports with pictures.',
    },
    {
      image: '../../assets/img/LOGO-MO.svg',
      caption: 'View various projects',
      subCaption: 'and see how others feel',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
