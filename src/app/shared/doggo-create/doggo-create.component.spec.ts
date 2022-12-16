import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoCreateComponent } from './doggo-create.component';

describe('DoggoCreateComponent', () => {
  let component: DoggoCreateComponent;
  let fixture: ComponentFixture<DoggoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
