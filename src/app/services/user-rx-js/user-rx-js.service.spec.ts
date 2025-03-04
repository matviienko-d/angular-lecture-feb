import { TestBed } from '@angular/core/testing';

import { UserRxJsService } from './user-rx-js.service';

describe('UserRxJsService', () => {
  let service: UserRxJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRxJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
