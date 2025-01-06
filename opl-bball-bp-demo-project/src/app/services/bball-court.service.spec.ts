import { TestBed } from '@angular/core/testing';

import { BballCourtService } from './bball-court.service'

describe('BballCourtService', () => {
  let service: BballCourtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BballCourtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
