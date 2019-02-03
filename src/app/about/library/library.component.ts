import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBooks() {
    document.getElementById('books').style.display = 'block';
    document.getElementById('thesis').style.display = 'none';
    document.getElementById('researchpaper').style.display = 'none';
  }
  getThesis() {
    document.getElementById('books').style.display = 'none';
    document.getElementById('thesis').style.display = 'block';
    document.getElementById('researchpaper').style.display = 'none';
  }
  getResearchpaper() {
    document.getElementById('books').style.display = 'none';
    document.getElementById('thesis').style.display = 'none';
    document.getElementById('researchpaper').style.display = 'block';
  }

}
