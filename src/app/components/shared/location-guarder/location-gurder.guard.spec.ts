import { TestBed } from '@angular/core/testing';

import { LocationGurderGuard } from './location-gurder.guard';

describe('LocationGurderGuard', () => {
  let guard: LocationGurderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LocationGurderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
