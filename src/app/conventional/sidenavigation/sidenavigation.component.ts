import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from './services/side-navigation.service';
import { SideNavigation } from './model/SideNavigation';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent implements OnInit {

  sideNavigation : SideNavigation = new SideNavigation();

  constructor(private sideNavigationService: SideNavigationService) { 
    // this.sideNavigation.name= "Dev";
    // this.sideNavigation.lastLogin= "5 min ago";
    // this.sideNavigation.numOfNotification= 4;
    // console.log(this.sideNavigation);
    this.getSideNagivationInfo();
  }

  ngOnInit() {
  }

  getSideNagivationInfo(): void {
    // this.sideNavigation.name= "Dev";
    // this.sideNavigation.lastLogin= "5 min ago";
    // this.sideNavigation.numOfNotification= 4;
    // console.log(this.sideNavigation);
    this.sideNavigationService.getSideNavigation()
        .subscribe(data => this.sideNavigation = data);
    console.log(this.sideNavigation);  
  }
}
