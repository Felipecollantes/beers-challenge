import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBeersComponent } from './list-beers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListBeersRoutingModule } from './list-beers-routing.module';

@NgModule({
  declarations: [ListBeersComponent],
  imports: [CommonModule, SharedModule, ListBeersRoutingModule],
})
export class ListBeersModule {}
