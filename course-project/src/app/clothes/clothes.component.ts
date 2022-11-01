import { Component, OnInit } from '@angular/core';
import { Top } from "../clothes/clothes.model"

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
Top:Top[] = [
  new Top("test top","this is the type of shirt",
  'https://i.pinimg.com/originals/4e/64/7e/4e647e776d00a6ba88cfb3872413f25d.jpg'
  )
]

  constructor() { }

  ngOnInit(): void {
  }

}
