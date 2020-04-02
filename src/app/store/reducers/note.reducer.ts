import { NoteActions, ENoteActions } from "../actions";
import { INoteState, initialNoteState } from "../state/note.state";

export const noteReducer = (
  state = initialNoteState,
  action: NoteActions
): INoteState => {
  switch (action.type) {
    case ENoteActions.GetNotes: {
      return {
        ...state,
        loading: true,
        errorLoading: false
      };
    }
    case ENoteActions.GetNote: {
      return {
        ...state,
        loading: true,
        errorLoading: false
      };
    }
    case ENoteActions.GetNotesSuccess: {
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    }
    case ENoteActions.GetNoteSuccess: {
      return {
        ...state,
        note: action.payload,
        loading: false
      };
    }
    case ENoteActions.GetNotesFailed: {
      return {
        ...state,
        notes: null,
        loading: false,
        errorLoading: true
      };
    }
    case ENoteActions.GetNoteFailed: {
      return {
        ...state,
        note: null,
        loading: false,
        errorLoading: true
      };
    }
    case ENoteActions.EditNoteSuccess: {
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload;
          } else {
            return note;
          }
        })
      };
    }
    case ENoteActions.CreateNoteSuccess: {
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    }
    case ENoteActions.RemoveNoteSuccess: {
      return {
        ...state,
        notes: state.notes.filter(item => item.id !== action.payload)
      };
    }
    default:
      return state;
  }
};
