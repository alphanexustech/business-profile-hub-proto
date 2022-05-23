import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { TestImports } from '../../misc/testing/imports';
import { TestDeclarations } from '../../misc/testing/declarations';
import { TestProviders } from '../../misc/testing/providers';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestImports ],
      declarations: [ TestDeclarations ],
      providers: [ TestProviders ]
    });
  });

});
