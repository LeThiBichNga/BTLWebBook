import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamhetComponent } from './sanphamhet.component';

describe('SanphamhetComponent', () => {
  let component: SanphamhetComponent;
  let fixture: ComponentFixture<SanphamhetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamhetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
