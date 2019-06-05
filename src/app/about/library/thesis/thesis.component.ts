// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ToastrManager } from 'ng6-toastr-notifications';
// import { LibraryService } from 'src/app/API_Service/library.service';
// import { MatPaginator } from '@angular/material';
// import { NgForm } from '@angular/forms';
// import { ThesisPagination } from './thesispagination';

// @Component({
//   selector: 'app-thesis',
//   templateUrl: './thesis.component.html',
//   styleUrls: ['./thesis.component.scss']
// })
// export class ThesisComponent implements OnInit {
//   length: any;
//   edit : boolean = false;
//   constructor(private library : LibraryService, private toastr :  ToastrManager) { }
//   @ViewChild(MatPaginator) paginator : MatPaginator;
//   @ViewChild('bookForm') bookForm : NgForm;
//   dataSource : ThesisPagination;
//     ngOnInit() {
//     this.library.getThesisCount()
//     .subscribe(
//       data =>{
//         this.length = data;
//       }
//     )
//     this.dataSource = new ThesisPagination(this.paginator,this.library);
//     }
  
//   displayedColumns: string[] = ['No.', 'Book name', 'Author', 'Status'];
//   onRowClicked(row) {
//     console.log(row);
//     this.edit=true;
//     this.bookForm.setValue({
//       'serialNo' : row.serialNo || null,
//       'bookNo' : row.bookNo || null,
//       'bookName' : row.bookName || null,
//       'author' : row.author || null,
//       'type' : row.type || null,
//       'registeredOn' : row.registeredOn || null,
//       'version' : row.version || null,
//       'status' : row.status || null,
//        'remarks' : row.remarks || null
//     })
   
// }
// initForm():void{
//   this.edit=false;
//   this.bookForm.setValue({
//     'serialNo' : null,
//     'bookNo' : null,
//     'bookName' : null,
//     'author' : null,
//     'type' : null,
//     'registeredOn' :  null,
//     'version' : null,
//     'status' :  null,
//      'remarks' : null
//   })
 
// }
// editThesis(f: NgForm):void{
//  console.log(f.value);  
//  this.library.editThesisDetails(f.value)
//  .subscribe(
//    data =>{
//       this.toastr.successToastr(data.message,'Success!');
//    },
//    error =>{
//      this.toastr.errorToastr("Error!!, try again after some time", 'Alert!')
//      console.log(error);
//    }
//  )   
// }
//  addThesis(f : NgForm):void{
//   console.log(f.value);  
//   this.library.addThesisDetails(f.value)
//   .subscribe(
//     data =>{
//        this.toastr.successToastr(data.message,'Success!');
//     },
//     error =>{
//       if(error.status != 504)
//       {
//         this.toastr.errorToastr(error.error.message, 'Alert!')  
//       }
//       else{
//         this.toastr.errorToastr("Error!!, try again after some time", 'Alert!')
//       }
      
//       console.log(error);
//     }
//   )
//  }
// }
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
 @Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit , AfterViewInit{
  length: any;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild('bookForm') bookForm : NgForm;
  @ViewChild(MatSort) sort: MatSort;
  edit : boolean = false;
  book;
  public dataSource: MatTableDataSource<any>;
  constructor(private library : LibraryService, private toastr :  ToastrManager) { 
    this.library.getBooks()
    .subscribe(
      data1=>{
        this.book = data1;
        console.log(this.book);
        this.dataSource.data =this.book;
      },
      error=>{
        console.log(error);
      }
      
    )
    this.dataSource = new MatTableDataSource<any>();
   
    console.log(this.dataSource);
  }
 
 // dataSource : TableDataSource;
 
    ngOnInit() {
    this.library.getBooksCount()
    .subscribe(
      data =>{
        this.length = data;
      }
    )
  
   // this.dataSource.sort = this.sort;
    //this.dataSource = new TableDataSource(this.paginator,this.library);
    }
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
  
  displayedColumns: string[] = ['No', 'bookName', 'author', 'Status'];
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

 applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}

