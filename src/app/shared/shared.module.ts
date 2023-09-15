import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, InputComponent, LoadingComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, HeaderComponent, InputComponent, LoadingComponent, ReactiveFormsModule],
})
export class SharedModule {}
