import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonsComponent } from './pokimons.component';

describe('PokimonsComponent', () => {
  let component: PokimonsComponent;
  let fixture: ComponentFixture<PokimonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
