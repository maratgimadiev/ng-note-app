import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  getNotes,
  IAppState,
  GetNotes,
  CreateNote,
  getLoading,
  getLoadingError
} from "@store";
import { ModalService } from "@shared";
import { INoteForm } from "@models";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  notes$ = this.store.pipe(select(getNotes));
  loading$ = this.store.pipe(select(getLoading));
  error$ = this.store.pipe(select(getLoadingError));
  constructor(
    private store: Store<IAppState>,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.store.dispatch(new GetNotes());
  }

  crateNote() {
    this.modalService
      .showNoteForm({ description: "", id: 0, name: "" }, false)
      .then((res: INoteForm) => {
        if (res.submit) {
          this.store.dispatch(new CreateNote(res.note));
        }
      })
      .catch(() => {});
  }
}
