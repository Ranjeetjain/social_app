import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLogFormComponent } from './adm-log-form.component';

describe('AdmLogFormComponent', () => {
  let component: AdmLogFormComponent;
  let fixture: ComponentFixture<AdmLogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmLogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
