import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomComponent } from './childcom.component';

describe('ChildcomComponent', () => {
  let component: ChildcomComponent;
  let fixture: ComponentFixture<ChildcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcomComponent]
    });
    fixture = TestBed.createComponent(ChildcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
