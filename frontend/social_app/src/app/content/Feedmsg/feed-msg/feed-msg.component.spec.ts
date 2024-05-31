import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMsgComponent } from './feed-msg.component';

describe('FeedMsgComponent', () => {
  let component: FeedMsgComponent;
  let fixture: ComponentFixture<FeedMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
