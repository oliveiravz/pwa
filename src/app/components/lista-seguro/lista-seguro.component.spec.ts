import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeguroComponent } from './lista-seguro.component';

describe('ListaSeguroComponent', () => {
  let component: ListaSeguroComponent;
  let fixture: ComponentFixture<ListaSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSeguroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
