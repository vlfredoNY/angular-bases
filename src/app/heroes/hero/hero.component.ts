import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 23;
  }

  resetform(): void {
    this.name = 'iron Man';
    this.age = 45;
  }

}
