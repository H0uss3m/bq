import { TestBed } from '@angular/core/testing';

import { AccueilService } from './accueil.service';

describe('MatriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccueilService = TestBed.get(AccueilService);
    expect(service).toBeTruthy();
  });
});
