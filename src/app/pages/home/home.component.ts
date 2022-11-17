import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = 'xd'
  public twoWay: string = ''


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public test(): void {
    alert('oi')
  }

  public goToLifecycle(): void {
    this.router.navigateByUrl('/life');
  }

  public goToDiretivas(): void {
    this.router.navigateByUrl('/diretivas');
  }


}
