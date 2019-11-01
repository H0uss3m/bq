import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTemplateComponent } from './creation-template.component';

describe('CreationTemplateComponent', () => {
  let component: CreationTemplateComponent;
  let fixture: ComponentFixture<CreationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
