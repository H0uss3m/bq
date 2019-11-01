import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurCreationModeleComponent } from './erreur-creation-modele.component';

describe('ErreurCreationModeleComponent', () => {
  let component: ErreurCreationModeleComponent;
  let fixture: ComponentFixture<ErreurCreationModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurCreationModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurCreationModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
