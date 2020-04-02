import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { environment } from "../../../environments/environment";
import { IAppState } from "../state";
import { noteReducer } from "./note.reducer";

export const reducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  notes: noteReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
