import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookComponent } from './book/book.component';
import { ThesisComponent } from './thesis/thesis.component';
import { ResearchpaperComponent } from './researchpaper/researchpaper.component';
import { LibraryComponent } from './library/library.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LibraryComponent,BookComponent, ThesisComponent, ResearchpaperComponent],
  exports : [MatSortModule]
})
export class LibraryModule { }
