import { TestBed } from '@angular/core/testing';

import { MatriceService } from './matrice.service';

describe('MatriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatriceService = TestBed.get(MatriceService);
    expect(service).toBeTruthy();
  });
});
