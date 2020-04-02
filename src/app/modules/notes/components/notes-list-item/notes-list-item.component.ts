import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { INote, INoteForm } from "@models";
import { Store } from "@ngrx/store";
import { IAppState, EditNote, RemoveNote } from "@store";
import { ModalService } from "@shared";

@Component({
  selector: "app-notes-list-item",
  templateUrl: "./notes-list-item.component.html",
  styleUrls: ["./notes-list-item.component.scss"]
})
export class NotesListItemComponent {
  @Input() note: INote;
  constructor(
    private store: Store<IAppState>,
    private modalService: ModalService
  ) {}
  editNote() {
    this.modalService
      .showNoteForm(this.note)
      .then((res: INoteForm) => {
        if (res.submit) {
          this.store.dispatch(new EditNote(res.note));
        }
      })
      .catch(() => {});
  }

  removeNote() {
    this.store.dispatch(new RemoveNote(this.note.id));
  }
}
