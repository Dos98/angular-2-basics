import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] // this is array brcause we can add multiple style sheets here
  styles : [`h3{color: green}`]
})
export class AppComponent {
  title = 'app';
  name = 'hello there';
}
