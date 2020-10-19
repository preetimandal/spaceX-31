import { TestBed } from '@angular/core/testing';

import { SiblingServicesService } from './sibling-services.service';

describe('SiblingServicesService', () => {
  let service: SiblingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
