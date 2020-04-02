import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import { NotesService } from "@shared";

import {
  GetNotes,
  ENoteActions,
  GetNotesSuccess,
  GetNotesFailed,
  GetNote,
  GetNoteSuccess,
  GetNoteFailed,
  CreateNote,
  CreateNoteFailed,
  CreateNoteSuccess,
  EditNote,
  EditNoteFailed,
  EditNoteSuccess,
  RemoveNote,
  RemoveNoteSuccess,
  RemoveNoteFailed
} from "../actions";
import { INote } from "@models";
import { ToastService } from "@shared";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class NoteEffects {
  constructor(
    private noteService: NotesService,
    private translate: TranslateService,
    private toastService: ToastService,
    private actions$: Actions
  ) {}

  @Effect()
  getAllNotes$ = this.actions$.pipe(
    ofType<GetNotes>(ENoteActions.GetNotes),
    switchMap(() =>
      this.noteService.getAllNotes().pipe(
        map((res: INote[]) => new GetNotesSuccess(res)),
        catchError(() => of(new GetNotesFailed()))
      )
    )
  );

  @Effect()
  getNoteById$ = this.actions$.pipe(
    ofType<GetNote>(ENoteActions.GetNote),
    map(action => action.payload),
    switchMap((id: number) =>
      this.noteService.getNoteById(id).pipe(
        map((res: INote) => new GetNoteSuccess(res)),
        catchError(() => of(new GetNoteFailed()))
      )
    )
  );

  @Effect()
  createNote = this.actions$.pipe(
    ofType<CreateNote>(ENoteActions.CreateNote),
    map(action => action.payload),
    switchMap(note =>
      this.noteService.createNote(note.name, note.description).pipe(
        map((res: INote) => new CreateNoteSuccess(res)),
        catchError(() => of(new CreateNoteFailed()))
      )
    )
  );

  @Effect()
  editNote = this.actions$.pipe(
    ofType<EditNote>(ENoteActions.EditNote),
    map(action => action.payload),
    switchMap(note =>
      this.noteService.editNote({ ...note }).pipe(
        map((res: INote) => new EditNoteSuccess(res)),
        catchError(() => of(new EditNoteFailed()))
      )
    )
  );

  @Effect()
  removeNote = this.actions$.pipe(
    ofType<RemoveNote>(ENoteActions.RemoveNote),
    map(action => action.payload),
    switchMap(id =>
      this.noteService.removeNoteById(id).pipe(
        map(() => new RemoveNoteSuccess(id)),
        catchError(() => of(new RemoveNoteFailed()))
      )
    )
  );

  @Effect()
  onError = this.actions$.pipe(
    ofType(
      ENoteActions.GetNoteFailed,
      ENoteActions.EditNoteFailed,
      ENoteActions.GetNotesFailed,
      ENoteActions.CreateNoteFailed,
      ENoteActions.RemoveNoteFailed
    ),
    switchMap(() => {
      this.toastService.show(this.translate.instant("error"), {
        classname: "bg-danger text-light",
        delay: 15000
      });
      return of({ type: "none " });
    })
  );
}
