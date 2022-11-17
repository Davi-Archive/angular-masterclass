import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  AfterContentChecked {

  constructor() { }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
