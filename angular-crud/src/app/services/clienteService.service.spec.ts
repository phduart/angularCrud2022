/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClienteService} from './clienteService.service';

describe('Service: ClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteService]
    });
  });

  it('should ...', inject([ClienteService], (service: ClienteService) => {
    expect(service).toBeTruthy();
  }));
});
