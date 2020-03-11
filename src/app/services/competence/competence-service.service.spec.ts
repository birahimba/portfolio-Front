import { TestBed } from '@angular/core/testing';

import { CompetenceServiceService } from './competence-service.service';

describe('CompetenceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetenceServiceService = TestBed.get(CompetenceServiceService);
    expect(service).toBeTruthy();
  });
});
