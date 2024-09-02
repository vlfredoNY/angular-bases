import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})

export class ListDbzComponent {

  @Input()
  public ChracaterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]



  // onDelete(index: number):void {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    // TODO: emitir el ID o indice del personaje
    if (!id) return;

    // console.log({id})
    this.onDelete.emit(id);
  }
  }

