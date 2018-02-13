import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})

export class PageHeaderComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Cloud & DevOps Project";
  }

  @Input() showsidebar = false;
  @Output() onSidebarToggle = new EventEmitter<boolean>();

  sidebartoggle() {
    if (this.showsidebar) {
      this.showsidebar = false;
    } else {
      this.showsidebar = true;
    }
    this.onSidebarToggle.emit(this.showsidebar);
  }
}
