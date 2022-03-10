import { TestBed } from '@angular/core/testing';

import { AliguardsGuard } from './aliguards.guard';

describe('AliguardsGuard', () => {
  let guard: AliguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AliguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
