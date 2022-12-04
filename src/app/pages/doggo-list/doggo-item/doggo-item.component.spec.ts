import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoItemComponent } from './doggo-item.component';

describe('DoggoItemComponent', () => {
  let component: DoggoItemComponent;
  let fixture: ComponentFixture<DoggoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
