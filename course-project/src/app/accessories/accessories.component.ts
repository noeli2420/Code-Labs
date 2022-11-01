import { Component, OnInit } from '@angular/core';
import {Bag } from "../accessories/bag.model"
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  Bags:Bag [] = [
    new Bag("test bag","this is the type of bag",
    'https://as1.ftcdn.net/v2/jpg/01/55/77/48/1000_F_155774870_ZuNQTSa28rUeYHpSb2bXrfz0OTygjVx8.jpg'
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
