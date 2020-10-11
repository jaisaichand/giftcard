import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtwoComponent } from './headtwo.component';

describe('HeadtwoComponent', () => {
  let component: HeadtwoComponent;
  let fixture: ComponentFixture<HeadtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
