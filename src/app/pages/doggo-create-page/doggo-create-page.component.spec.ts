import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoCreatePageComponent } from './doggo-create-page.component';

describe('DoggoCreatePageComponent', () => {
  let component: DoggoCreatePageComponent;
  let fixture: ComponentFixture<DoggoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
