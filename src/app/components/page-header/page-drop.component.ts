import { Component } from '@angular/core'

@Component({
  selector: 'page-drop',
  template: `
      <div>
        <select [compareWith]="byJob" [(ngModel)]="selectedJob" (ngModelChange)="onChange($event)">
          <option *ngFor="let job of jobs" [ngValue]="job" >
            {{job.type}}
          </option>
        </select>

      </div>
    `,
})

export class PageDrop {
  jobs;
  name:string;
  event:string;
  type:string;
  selectedJob:any;
  selectedItem:any;

  constructor() {
    this.jobs = [{type: 'Dev & Ops Project'}, {type: 'Enable Project'}]
    this.selectedJob = this.jobs[0]
  }

  byJob(item1, item2) {
    return item1.type == 'Dev & Ops Project'
  }

  onChange(event:any) {
    console.log(event);
    this.selectedItem = event;
    console.log(Object.is(event, this.selectedItem));

    var selItem = {
      type: "Enable Project"
    };

    var a = JSON.stringify(event)

    console.log(a);

    if (a.indexOf("Enable") >= 0) {
      location.href = "/#/availability";
    }

    if (a.indexOf("Dev") >= 0) {
      location.href = "/#/index";
    }

  }
}
