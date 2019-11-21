import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { ThesisComponent } from './thesis/thesis.component';
import { ResearchpaperComponent } from './researchpaper/researchpaper.component';

const routes: Routes = [
  { path : '',component : LibraryComponent, children:[
    { path : '', redirectTo : 'books', pathMatch : 'full'},
    { path : 'books', component : BookComponent},
    
    { path : 'thesis', component : ThesisComponent},
    { path : 'researchpaper', component : ResearchpaperComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
