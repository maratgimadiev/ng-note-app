import { RouterReducerState } from "@ngrx/router-store";

import { INoteState, initialNoteState } from "./note.state";

export interface IAppState {
  notes: INoteState;
  router?: RouterReducerState;
}

export const initialAppState: IAppState = {
  notes: initialNoteState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
