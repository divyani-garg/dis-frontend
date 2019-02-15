import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss'],

})
export class RemainingComplaintsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public popoverTitle: string = 'Is complaint is resolved?';
  public popoverMessage: string = 'Do you want to continue?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

}
