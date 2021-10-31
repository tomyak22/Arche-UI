import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcheLightComponent } from './arche-light.component';

describe('ArcheLightComponent', () => {
  let component: ArcheLightComponent;
  let fixture: ComponentFixture<ArcheLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcheLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcheLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
