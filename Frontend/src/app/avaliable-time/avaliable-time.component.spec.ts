import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableTimeComponent } from './avaliable-time.component';

describe('AvaliableTimeComponent', () => {
  let component: AvaliableTimeComponent;
  let fixture: ComponentFixture<AvaliableTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliableTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
