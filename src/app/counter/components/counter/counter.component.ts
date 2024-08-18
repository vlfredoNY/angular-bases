import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Tracklist: {{counter}} canciones</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreseBy(-1)" >-1</button>



  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter = this.counter +=1;
  }

  decreseBy(value: number): void {
    this.counter = this.counter -=1;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
