import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaListaComponent } from './asignatura-lista.component';

describe('AsignaturaListaComponent', () => {
  let component: AsignaturaListaComponent;
  let fixture: ComponentFixture<AsignaturaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaListaComponent]
    });
    fixture = TestBed.createComponent(AsignaturaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
