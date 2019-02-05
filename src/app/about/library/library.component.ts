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
    let bid = document.getElementById('books');
    let tid = document.getElementById('thesis');
    let rid = document.getElementById('researchpaper');
    bid.style.display = 'block';
    tid.style.display = 'none';
    rid.style.display = 'none';
  }
  getThesis() {
    let bid = document.getElementById('books');
    let tid = document.getElementById('thesis');
    let rid = document.getElementById('researchpaper');
    bid.style.display = 'none';
    tid.style.display = 'block';
    rid.style.display = 'none';
  }
  getResearchpaper() {
    let bid = document.getElementById('books');
    let tid = document.getElementById('thesis');
    let rid = document.getElementById('researchpaper');
    bid.style.display = 'none';
    tid.style.display = 'none';
    rid.style.display = 'block';
  }

}
