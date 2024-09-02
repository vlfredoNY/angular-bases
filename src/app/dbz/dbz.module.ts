import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { addCharacterComponent } from './components/addCharacter/add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    addCharacterComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
