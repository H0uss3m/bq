import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMatriceFormComponent } from './ajouter-matrice-form.component';

describe('AjouterMatriceFormComponent', () => {
  let component: AjouterMatriceFormComponent;
  let fixture: ComponentFixture<AjouterMatriceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMatriceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMatriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
