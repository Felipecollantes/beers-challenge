import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beers',
    loadChildren: () => import('./views/list-beers/list-beers.module').then((m) => m.ListBeersModule),
  },
  { path: '', redirectTo: `/beers`, pathMatch: 'full' },
  { path: '**', redirectTo: `/beers`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
