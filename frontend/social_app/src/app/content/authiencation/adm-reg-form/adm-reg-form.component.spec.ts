import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegFormComponent } from './adm-reg-form.component';

describe('AdmRegFormComponent', () => {
  let component: AdmRegFormComponent;
  let fixture: ComponentFixture<AdmRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmRegFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
