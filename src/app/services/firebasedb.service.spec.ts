import { TestBed } from '@angular/core/testing';

import { FirebasedbService } from './firebasedb.service';

describe('FirebasedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasedbService = TestBed.get(FirebasedbService);
    expect(service).toBeTruthy();
  });
});
