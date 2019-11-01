import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceCardComponent } from './matrice-card.component';

describe('MatriceCardComponent', () => {
  let component: MatriceCardComponent;
  let fixture: ComponentFixture<MatriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
