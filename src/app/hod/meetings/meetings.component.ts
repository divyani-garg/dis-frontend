import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {


  List1: any[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  List2: any[] = [
    
  ];
  constructor() { }
  MainController() {

    var selectFaIndex = 0;
    var SelectedAvailItems = [];
    var SelectedSelectedListItems = [];
    var SelectedListItems = [
        []
    ];
    var AvailableListItems = [
        []
    ];

    var DefaultListItems = [
        [{
            email: 'john.banks@rj.com'
        }, {
            email: 'jim.chevy@rj.com'
        }, {
            email: 'ralph.stocks@rj.com'
        }],
        [{
            email: 'jim.sums@rj.com'
        }, {
            email: 'jim.camaro@rj.com'
        }, {
            email: 'jeff.money@rj.com'
        }],
        [{
            email: 'fred.pays@rj.com'
        }, {
            email: 'steve.acura@rj.com'
        }, {
            email: 'ryan.bills@rj.com'
        }]
    ];

    AvailableListItems.concat(DefaultListItems);

    var btnRight = function () {
        //move selected.
        SelectedAvailItems.forEach( function (value, key) {
            this.push(value);
        },SelectedListItems[selectFaIndex]);

        //remove the ones that were moved.
        SelectedAvailItems.forEach(function (value, key) {
            for (var i = AvailableListItems[selectFaIndex].length - 1; i >= 0; i--) {
                if (AvailableListItems[selectFaIndex][i].email == value.email) {
                    AvailableListItems[selectFaIndex].splice(i, 1);
                }
            }
        });
        SelectedAvailItems = [];
    };

    var btnLeft = function () {
        //move selected.
        SelectedSelectedListItems.forEach(function (value, key) {
            this.push(value);
        },AvailableListItems[selectFaIndex]);

        //remove the ones that were moved from the source container.
        SelectedSelectedListItems.forEach(function (value, key) {
            for (var i = SelectedListItems[selectFaIndex].length - 1; i >= 0; i--) {
                if (SelectedListItems[selectFaIndex][i].email == value.email) {
                    SelectedListItems[selectFaIndex].splice(i, 1);
                }
            }
        });
        SelectedSelectedListItems = [];
    };
}

  onItemAdded(h, index:number){
    this.List2.push(h);
    this.List1.splice(index, 1);
  }
  onItemDeleted(h, index2: number){
    this.List1.push(h);
    this.List2.splice(index2, 1);
  }

  ngOnInit() {
  }

}
