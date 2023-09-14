import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListBeersComponent } from './list-beers.component';

const routes: Routes = [
  {
    path: '',
    component: ListBeersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBeersRoutingModule {}
