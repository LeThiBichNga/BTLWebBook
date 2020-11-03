import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamtonkhoComponent } from './sanphamtonkho.component';

describe('SanphamtonkhoComponent', () => {
  let component: SanphamtonkhoComponent;
  let fixture: ComponentFixture<SanphamtonkhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamtonkhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamtonkhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
