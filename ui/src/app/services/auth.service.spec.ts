import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { TestImports } from '../misc/testing/imports';
import { TestDeclarations } from '../misc/testing/declarations';
import { TestProviders } from '../misc/testing/providers';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestImports ],
      declarations: [ TestDeclarations ],
      providers: [ TestProviders ]
    });
  });

});
