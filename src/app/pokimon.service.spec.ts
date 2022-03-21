import { TestBed } from '@angular/core/testing';

import { PokimonService } from './pokimon.service';

describe('PokimonService', () => {
  let service: PokimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
