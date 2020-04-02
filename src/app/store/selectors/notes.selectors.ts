import { IAppState } from "../state";
import { createSelector } from "@ngrx/store";
import { INoteState } from "../state/note.state";

export const selectNotes = (state: IAppState) => state.notes;

export const getNotes = createSelector(
  selectNotes,
  (state: INoteState) => state.notes
);

export const getNoteById = (id: number) =>
  createSelector(selectNotes, (state: INoteState) => {
    if (state && state.notes) {
      return state.notes.find(item => item.id === id)[0];
    }
  });

export const getNote = createSelector(
  selectNotes,
  (state: INoteState) => state.note
);

export const getLoading = createSelector(
  selectNotes,
  (state: INoteState) => state.loading
);

export const getLoadingError = createSelector(
  selectNotes,
  (state: INoteState) => state.errorLoading
);
