import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlloaisanphamComponent } from './qlloaisanpham.component';

describe('QlloaisanphamComponent', () => {
  let component: QlloaisanphamComponent;
  let fixture: ComponentFixture<QlloaisanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlloaisanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlloaisanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});