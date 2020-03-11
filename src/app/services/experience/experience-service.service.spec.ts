import { TestBed } from '@angular/core/testing';

import { ExperienceServiceService } from './experience-service.service';

describe('ExperienceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienceServiceService = TestBed.get(ExperienceServiceService);
    expect(service).toBeTruthy();
  });
});
