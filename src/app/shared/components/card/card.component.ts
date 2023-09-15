import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'custom-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() beer = {} as Beer;
}
