import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css'
})
export class SideNavigationComponent {
show=false;


slide(){
this.show=true;
}
hidden(){
  this.show=false;
}
}
