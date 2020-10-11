import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlandingComponent } from './mainlanding.component';

describe('MainlandingComponent', () => {
  let component: MainlandingComponent;
  let fixture: ComponentFixture<MainlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
