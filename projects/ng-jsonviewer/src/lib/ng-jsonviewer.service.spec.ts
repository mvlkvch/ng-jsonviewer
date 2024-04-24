import { TestBed } from '@angular/core/testing';

import { NgJsonViewerService } from './ng-jsonviewer.service';

describe('NgJsonViewerService', () => {
  let service: NgJsonViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgJsonViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
