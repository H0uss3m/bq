import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTemplateFormComponent } from './ajouter-template-form.component';

describe('AjouterTemplateFormComponent', () => {
  let component: AjouterTemplateFormComponent;
  let fixture: ComponentFixture<AjouterTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
