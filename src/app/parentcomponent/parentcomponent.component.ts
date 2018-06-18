import { Component } from '@angular/core';

@Component({
  selector: 'parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent  {

  constructor() { }

  childTitle: string = 'World Hello';


  passedString: string = '';


  onNotify(notify: string) {
    this.passedString = notify;
    console.log(notify);
  }
}

