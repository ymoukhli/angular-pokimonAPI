import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokimonCardComponent } from './pokimon-card.component';

describe('PokimonCardComponent', () => {
  let component: PokimonCardComponent;
  let fixture: ComponentFixture<PokimonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokimonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokimonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
