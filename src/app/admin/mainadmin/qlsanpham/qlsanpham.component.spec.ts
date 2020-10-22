import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsanphamComponent } from './qlsanpham.component';

describe('QlsanphamComponent', () => {
  let component: QlsanphamComponent;
  let fixture: ComponentFixture<QlsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
