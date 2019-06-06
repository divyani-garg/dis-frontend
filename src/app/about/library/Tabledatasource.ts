import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material";
import { Observable, of as observableOf, merge } from "rxjs";
import { map } from 'rxjs/operators';
import { LibraryService } from "src/app/API_Service/library.service";
// import { OnInit } from "@angular/core";
export class TableDataSource extends DataSource<any> {
  data ;

  constructor(private paginator : MatPaginator, private library : LibraryService) {
      super();
      this.callData();
    }

callData(){
  this.library.getBooks()
  .subscribe(
    data1=>{
      this.data = data1;
      console.log(this.data);
    },
    error=>{
      console.log(error);
    }
    
  )
}
    
  connect():Observable<any[]>{
    console.log(this.data);
      const dataMutation = [
        observableOf(this.data),
        this.paginator.page
      ]
      this.paginator.length  = this.data.length;

      return merge(...dataMutation).pipe(map(() => {
          return this.getPagedData(this.data)
      }))
  }
    getPagedData(data : any[]): any {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice().splice(startIndex, this.paginator.pageSize);
    }
  disconnect(){}
}
