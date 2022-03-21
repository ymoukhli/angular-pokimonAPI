import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonDetailsComponent } from './pokimon-details.component';

describe('PokimonDetailsComponent', () => {
  let component: PokimonDetailsComponent;
  let fixture: ComponentFixture<PokimonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
