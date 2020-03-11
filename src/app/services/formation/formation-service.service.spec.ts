import { TestBed } from '@angular/core/testing';

import { FormationServiceService } from './formation-service.service';

describe('FormationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationServiceService = TestBed.get(FormationServiceService);
    expect(service).toBeTruthy();
  });
});
