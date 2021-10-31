import { TestBed } from '@angular/core/testing';

import { ArcheLightService } from './arche-light.service';

describe('ArcheLightService', () => {
  let service: ArcheLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcheLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
