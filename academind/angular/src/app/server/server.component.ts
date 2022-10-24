import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No sever was created ';
  serverName = 'Testserver';
  serverCreated = false;
constructor(){
  setTimeout(() =>{
    this.allowNewServer = true;
  }, 2000);
}
ngOnInit() {
}
onCreateServer() {
  this.serverCreated = true;
  this.serverCreationStatus = 'Server was created';
}
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
