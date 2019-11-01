import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleCardComponent } from './modele-card.component';

describe('ModeleCardComponent', () => {
  let component: ModeleCardComponent;
  let fixture: ComponentFixture<ModeleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
