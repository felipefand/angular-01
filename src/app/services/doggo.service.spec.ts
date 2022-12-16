import { TestBed } from '@angular/core/testing';

import { DoggoService } from './doggo.service';

describe('DoggoService', () => {
  let service: DoggoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoggoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
