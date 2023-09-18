import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiObjektumComponent } from './open-ai-objektum.component';

describe('OpenAiObjektumComponent', () => {
  let component: OpenAiObjektumComponent;
  let fixture: ComponentFixture<OpenAiObjektumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAiObjektumComponent]
    });
    fixture = TestBed.createComponent(OpenAiObjektumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
