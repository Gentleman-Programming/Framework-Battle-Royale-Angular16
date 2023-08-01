import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUserFormComponent } from './g-user-form.component';

describe('GUserFormComponent', () => {
  let component: GUserFormComponent;
  let fixture: ComponentFixture<GUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GUserFormComponent]
    });
    fixture = TestBed.createComponent(GUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
