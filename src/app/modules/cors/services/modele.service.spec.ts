import { TestBed } from '@angular/core/testing';

import { ModeleService } from './modele.service';

describe('ModeleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeleService = TestBed.get(ModeleService);
    expect(service).toBeTruthy();
  });
});
