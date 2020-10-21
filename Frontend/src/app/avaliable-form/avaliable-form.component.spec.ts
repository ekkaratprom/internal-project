import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableFormComponent } from './avaliable-form.component';

describe('AvaliableFormComponent', () => {
  let component: AvaliableFormComponent;
  let fixture: ComponentFixture<AvaliableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
