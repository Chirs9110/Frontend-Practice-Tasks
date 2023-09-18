import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnookerComponent } from './snooker.component';

describe('SnookerComponent', () => {
  let component: SnookerComponent;
  let fixture: ComponentFixture<SnookerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnookerComponent]
    });
    fixture = TestBed.createComponent(SnookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
