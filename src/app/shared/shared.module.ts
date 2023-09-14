import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, InputComponent],
  imports: [CommonModule],
  exports: [CardComponent, HeaderComponent, InputComponent],
})
export class SharedModule {}
