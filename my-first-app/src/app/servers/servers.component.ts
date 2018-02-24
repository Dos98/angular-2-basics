import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // by attribute
  selector: '.app-servers',// by class
  // template: `<app-server></app-server><hr><app-server></app-server>`,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName ="AyushDosaj";
  serverCreated = false;
  servers = ['testserver1','testserver2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created!and Name is ' + this.serverName ;
  }
  onUpdateServerName(event) {
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
  }

}
