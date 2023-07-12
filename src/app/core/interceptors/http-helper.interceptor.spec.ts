import { TestBed } from '@angular/core/testing';

import { HttpHelperInterceptor } from './http-helper.interceptor';

describe('HttpHelperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHelperInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHelperInterceptor = TestBed.inject(HttpHelperInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
