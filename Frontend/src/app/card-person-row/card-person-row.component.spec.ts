import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonRowComponent } from './card-person-row.component';

describe('CardPersonRowComponent', () => {
  let component: CardPersonRowComponent;
  let fixture: ComponentFixture<CardPersonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPersonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
