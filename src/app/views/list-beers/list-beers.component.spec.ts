import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeersComponent } from './list-beers.component';

describe('ListBeersComponent', () => {
  let component: ListBeersComponent;
  let fixture: ComponentFixture<ListBeersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBeersComponent]
    });
    fixture = TestBed.createComponent(ListBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
