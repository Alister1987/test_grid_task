import { TestBed, inject } from '@angular/core/testing';

import { DatatService } from './data.service';

describe('DatatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatService]
    });
  });

  it('should be created', inject([DatatService], (service: DatatService) => {
    expect(service).toBeTruthy();
  }));
});
