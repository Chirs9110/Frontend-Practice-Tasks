import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuListaComponent } from './eu-lista.component';

describe('EuListaComponent', () => {
  let component: EuListaComponent;
  let fixture: ComponentFixture<EuListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuListaComponent]
    });
    fixture = TestBed.createComponent(EuListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
