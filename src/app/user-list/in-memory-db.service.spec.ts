import { inject, TestBed } from '@angular/core/testing';
import { InMemoryDb } from './in-memory-db.service';


describe('InMemoryDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDb]
    });
  });

  it('should be created', inject([InMemoryDb], (service: InMemoryDb) => {
    expect(service).toBeTruthy();
  }));
});
