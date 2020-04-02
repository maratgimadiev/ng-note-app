import { INote } from "@models";

export interface INoteState {
  notes: INote[];
  note: INote;
  loading: boolean;
  errorLoading: boolean;
}

export const initialNoteState: INoteState = {
  notes: null,
  note: null,
  loading: false,
  errorLoading: false
};
