import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMsgComponent } from './post-msg.component';

describe('PostMsgComponent', () => {
  let component: PostMsgComponent;
  let fixture: ComponentFixture<PostMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
