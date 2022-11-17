import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public showAndHide: boolean = true;
  public arrayFromApi: string[] = ['1', '2', '3', '4', '5'];
  public itemToAdd: any = '';
  public valueTest: number = 0;
  public cssClassSaver: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public showOrHideComponent(): void {
    this.showAndHide = !this.showAndHide;
  }

  public addOneItemToTheList(): void {
    this.arrayFromApi.push(this.itemToAdd);
  }

  public removerItem(index: number): void {
    this.arrayFromApi.splice(index, 1);
  }

  public increase(): void {
    this.valueTest++
  }

  public changeCssStyle(): void {
    if (this.cssClassSaver === 'disabled') {
      this.cssClassSaver = 'enabled'
    } else {
      this.cssClassSaver === 'disabled'
    }
  }

}
