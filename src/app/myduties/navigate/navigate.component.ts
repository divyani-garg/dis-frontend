import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this.openNav();
  this.closeNav();
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "270px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


}
