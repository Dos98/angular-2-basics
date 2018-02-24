import {Component} from '@angular/core';

@Component({
    selector : 'app-server',   // sshould nbe uniqe And should not match any html components
    templateUrl: './server.component.html',
    //  styleUrls : ['./server.component.css',`
    styles : [`
    .online {
        color: white;
    }`]
})

export class ServerComponent  {
    serverId: number = 10;
    serverStatus: string= 'offline'; // need not to write type
    getServerStatus() {
        return this.serverStatus;
    }
    constructor() {
        this.serverStatus =Math.random() > 0.5 ? 'online' :'offline';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}