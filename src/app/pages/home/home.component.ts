import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = 'xd'
  public twoWay: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  public test():void{
    alert('oi')
  }

}
