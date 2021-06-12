import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  power = 10;
  fruts = ['apple', 'pinapple', 'grapes', 'bananas', 'apricot'];

  // tslint:disable-next-line: typedef
  addItem(frut: string){
    this.fruts.push(frut);
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number){
    this.fruts.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
