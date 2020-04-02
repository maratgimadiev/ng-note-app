import { Action } from "@ngrx/store";
import { INote } from "@models";

export enum ENoteActions {
  GetNotes = "[Note] Get Notes",
  GetNotesSuccess = "[Note] Get Notes Success",
  GetNote = "[Note] Get Note",
  GetNoteSuccess = "[Note] Get Note Success",
  GetNotesFailed = "[Note] Get Notes Failed",
  GetNoteFailed = "[Note] Get Note Failed",
  EditNote = "[Note] Edit Node",
  EditNoteSuccess = "[Note] Edit Note Success",
  EditNoteFailed = "[Note] Edit Note Failed",
  CreateNote = "[Note] Create Node",
  CreateNoteSuccess = "[Note] Create Node Success",
  CreateNoteFailed = "[Note] Create Node Failed",
  RemoveNote = "[Note] Remove Node",
  RemoveNoteSuccess = "[Note] Remove Node Success",
  RemoveNoteFailed = "[Note] Remove Node Failed"
}

export class GetNotes implements Action {
  public readonly type = ENoteActions.GetNotes;
}

export class GetNotesSuccess implements Action {
  public readonly type = ENoteActions.GetNotesSuccess;
  constructor(public payload: INote[]) {}
}

export class GetNote implements Action {
  public readonly type = ENoteActions.GetNote;
  constructor(public payload: number) {}
}

export class GetNoteSuccess implements Action {
  public readonly type = ENoteActions.GetNoteSuccess;
  constructor(public payload: INote) {}
}

export class GetNotesFailed implements Action {
  public readonly type = ENoteActions.GetNotesFailed;
}

export class GetNoteFailed implements Action {
  public readonly type = ENoteActions.GetNoteFailed;
}

export class EditNote implements Action {
  public readonly type = ENoteActions.EditNote;
  constructor(public payload: INote) {}
}

export class EditNoteSuccess implements Action {
  public readonly type = ENoteActions.EditNoteSuccess;
  constructor(public payload: INote) {}
}

export class EditNoteFailed implements Action {
  public readonly type = ENoteActions.EditNoteFailed;
}

export class CreateNote implements Action {
  public readonly type = ENoteActions.CreateNote;
  constructor(public payload: INote) {}
}

export class CreateNoteSuccess implements Action {
  public readonly type = ENoteActions.CreateNoteSuccess;
  constructor(public payload: INote) {}
}

export class CreateNoteFailed implements Action {
  public readonly type = ENoteActions.CreateNoteFailed;
}

export class RemoveNote implements Action {
  public readonly type = ENoteActions.RemoveNote;
  constructor(public payload: number) {}
}

export class RemoveNoteSuccess implements Action {
  public readonly type = ENoteActions.RemoveNoteSuccess;
  constructor(public payload: number) {}
}

export class RemoveNoteFailed implements Action {
  public readonly type = ENoteActions.RemoveNoteFailed;
}

export type NoteActions =
  | GetNotes
  | GetNotesSuccess
  | GetNotesFailed
  | GetNote
  | GetNoteSuccess
  | GetNoteFailed
  | EditNote
  | EditNoteSuccess
  | EditNoteFailed
  | CreateNote
  | CreateNoteSuccess
  | CreateNoteFailed
  | RemoveNote
  | RemoveNoteSuccess
  | RemoveNoteFailed;
