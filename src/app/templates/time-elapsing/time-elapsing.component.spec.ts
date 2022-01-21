import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeElapsingComponent } from './time-elapsing.component';

describe('TimeElapsingComponent', () => {
  let component: TimeElapsingComponent;
  let fixture: ComponentFixture<TimeElapsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeElapsingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeElapsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
