import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLogFormComponent } from './cust-log-form.component';

describe('CustLogFormComponent', () => {
  let component: CustLogFormComponent;
  let fixture: ComponentFixture<CustLogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustLogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
