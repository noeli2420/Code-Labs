import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dogs-app';

  width:number = 200;
  height: number = 999;

  dogs:any =[ {
    name:"matthew",
    age: 69
  },
  {
    name:"idk",
    age: 4
  },
{
  name: "um",
  age: 420

}]



  onResizeImage(event:any){
    console.log(event.srcElement.value)

    const userInput = event.srcElement.value;
    this.width = userInput;
    this.height = userInput;
  }
}
