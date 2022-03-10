import { TestBed } from '@angular/core/testing';

import { AliServiceService } from './ali-service.service';

describe('AliServiceService', () => {
  let service: AliServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AliServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
