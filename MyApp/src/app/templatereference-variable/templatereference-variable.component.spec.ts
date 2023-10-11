import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferenceVariableComponent } from './templatereference-variable.component';

describe('TemplatereferenceVariableComponent', () => {
  let component: TemplatereferenceVariableComponent;
  let fixture: ComponentFixture<TemplatereferenceVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatereferenceVariableComponent]
    });
    fixture = TestBed.createComponent(TemplatereferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
