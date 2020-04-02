import { INote } from "./note.interface";

export interface INoteForm {
  note: INote;
  submit: boolean;
  edit: boolean;
}
