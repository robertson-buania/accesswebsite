import { TestBed } from '@angular/core/testing';

import { KayService } from './kay.service';

describe('KayService', () => {
  let service: KayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
