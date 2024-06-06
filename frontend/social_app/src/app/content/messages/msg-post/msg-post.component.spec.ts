import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPostComponent } from './msg-post.component';

describe('MsgPostComponent', () => {
  let component: MsgPostComponent;
  let fixture: ComponentFixture<MsgPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsgPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
