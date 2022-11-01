import { Component, OnInit } from '@angular/core';

import { Top } from '../clothes.model';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  tops : Top [] = [
    new Top ('test clothes', "this is just a test ",
    'https://c8.alamy.com/comp/2CBCBGX/deep-v-neck-jersey-t-shirt-technical-fashion-illustration-with-short-sleeves-close-fitting-shape-flat-top-apparel-template-front-back-white-color-women-men-unisex-outfit-cad-mockup-2CBCBGX.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
