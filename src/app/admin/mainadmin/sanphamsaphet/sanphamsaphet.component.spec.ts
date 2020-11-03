import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamsaphetComponent } from './sanphamsaphet.component';

describe('SanphamsaphetComponent', () => {
  let component: SanphamsaphetComponent;
  let fixture: ComponentFixture<SanphamsaphetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamsaphetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamsaphetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
