import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTablaComponent } from './ng-for-tabla.component';

describe('NgForTablaComponent', () => {
  let component: NgForTablaComponent;
  let fixture: ComponentFixture<NgForTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
