import { TestBed } from '@angular/core/testing';

import { HttpCashService } from './http-cash.service';

describe('HttpCashService', () => {
  let service: HttpCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
