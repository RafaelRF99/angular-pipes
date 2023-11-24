import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExemploComponent } from './pipes-exemplo.component';

describe('PipesExemploComponent', () => {
  let component: PipesExemploComponent;
  let fixture: ComponentFixture<PipesExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
