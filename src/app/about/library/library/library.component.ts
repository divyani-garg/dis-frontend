import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  length: any;
  thesisLength: any;

  constructor(private library  : LibraryService) { }

  ngOnInit() {
    this.library.getBooksCount()
    .subscribe(
      data =>{
        this.length = data;
      }
    )
    // this.library.getThesisCount()
    // .subscribe(
    //   data =>{
    //     this.thesisLength = data;
    //   }
    // )
  }

  

}
