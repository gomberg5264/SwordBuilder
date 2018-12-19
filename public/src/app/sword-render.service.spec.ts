/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwordRenderService } from './sword-render.service';

describe('Service: SwordRender', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwordRenderService]
    });
  });

  it('should ...', inject([SwordRenderService], (service: SwordRenderService) => {
    expect(service).toBeTruthy();
  }));
});
