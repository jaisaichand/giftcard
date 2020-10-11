import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadoneComponent } from './headone.component';

describe('HeadoneComponent', () => {
  let component: HeadoneComponent;
  let fixture: ComponentFixture<HeadoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
