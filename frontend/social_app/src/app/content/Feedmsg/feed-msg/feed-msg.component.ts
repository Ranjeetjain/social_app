import { Component } from '@angular/core';

@Component({
  selector: 'app-feed-msg',
  templateUrl: './feed-msg.component.html',
  styleUrl: './feed-msg.component.css'
})
export class FeedMsgComponent {
show=false;


fit(){
  this.show=true;
}

fat(){
  this.show=false;
}
}
