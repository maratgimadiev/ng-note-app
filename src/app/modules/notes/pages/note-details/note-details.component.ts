import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { GetNote } from "@store";
import { getNote, IAppState, getLoading, getLoadingError } from "@store";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"]
})
export class NoteDetailsComponent implements OnInit {
  note$ = this.store.pipe(select(getNote));
  loading$ = this.store.pipe(select(getLoading));
  error$ = this.store.pipe(select(getLoadingError));
  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {}

  ngOnInit() {
    this.getNoteById(+this.route.snapshot.paramMap.get("noteId"));
  }

  getNoteById(id: number) {
    this.store.dispatch(new GetNote(id));
  }
}
