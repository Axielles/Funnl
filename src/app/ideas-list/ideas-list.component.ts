import { Component, OnInit } from '@angular/core';
import { IdeasComponent } from '../ideas/ideas.component';

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {

  // ideasList: any = [];

  // constructor(private idea: IdeasComponent) { }
  constructor() { }

  ngOnInit() {
  }

}
