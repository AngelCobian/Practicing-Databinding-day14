import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'childcomponent',
  // templateUrl: './childcomponent.component.html',
  template:`
  <h1>{{title}}</h1>
  <br>
  <button type="button" (click)="notifyParent(); disableBtn()" [disabled]='!disabler' [innerText]='textBtn'>Click Me!</button>
  `,
  styleUrls: ['./childcomponent.component.css']
})

export class ChildcomponentComponent implements OnInit  {
    textBtn: string = 'Click Me!';
    disabler: boolean = true;
    @Input() title: string;
    @Output() emmitter = new EventEmitter<string>();
    helloWorld: string = 'Hello World!';
    constructor() { }

    notifyParent() {
      this.emmitter.emit(this.helloWorld);
    }
    disableBtn(){
      this.disabler = !this.disabler;
      this.textBtn = "I'm disabled"
    }
    ngOnInit() {
    }

  }
