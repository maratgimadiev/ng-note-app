import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { INote } from "@models";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"]
})
export class NotesListComponent implements OnInit {
  @Input() notes: INote[];
  constructor() {}

  ngOnInit() {}

  identify(index, item) {
    return item.id;
  }
}
