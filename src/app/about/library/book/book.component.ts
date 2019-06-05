import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { MatPaginator } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers : [LibraryService]
})
export class BookComponent implements OnInit {
  length: any;
  edit : boolean = false;
  constructor(private library : LibraryService, private toastr :  ToastrManager) { }
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild('bookForm') bookForm : NgForm;
    ngOnInit() {
    this.library.getBooksCount()
    .subscribe(
      data =>{
        this.length = data;
      }
    )
    }
  
  displayedColumns: string[] = ['No.', 'Book name', 'Author', 'Status'];
  onRowClicked(row) {
    console.log(row);
    this.edit=true;
    this.bookForm.setValue({
      'serialNo' : row.serialNo || null,
      'bookNo' : row.bookNo || null,
      'bookName' : row.bookName || null,
      'author' : row.author || null,
      'type' : row.type || null,
      'registeredOn' : row.registeredOn || null,
      'version' : row.version || null,
      'status' : row.status || null,
       'remarks' : row.remarks || null
    })
   
}
initForm():void{
  this.edit=false;
  this.bookForm.setValue({
    'serialNo' : null,
    'bookNo' : null,
    'bookName' : null,
    'author' : null,
    'type' : null,
    'registeredOn' :  null,
    'version' : null,
    'status' :  null,
     'remarks' : null
  })
 
}
editBook(f: NgForm):void{
 console.log(f.value);  
 this.library.editBookDetails(f.value)
 .subscribe(
   data =>{
      this.toastr.successToastr(data.message,'Success!');
   },
   error =>{
     this.toastr.errorToastr("Error!!, try again after some time", 'Alert!')
     console.log(error);
   }
 )   
}
 addBook(f : NgForm):void{
  console.log(f.value);  
  this.library.addBookDetails(f.value)
  .subscribe(
    data =>{
       this.toastr.successToastr(data.message,'Success!');
    },
    error =>{
      if(error.status != 504)
      {
        this.toastr.errorToastr(error.error.message, 'Alert!')  
      }
      else{
        this.toastr.errorToastr("Error!!, try again after some time", 'Alert!')
      }
      
      console.log(error);
    }
  )
 }
}
