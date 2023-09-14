import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBeersComponent } from './list-beers.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListBeersComponent],
  imports: [CommonModule, SharedModule],
})
export class ListBeersModule {}
