import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NoteDetailsComponent, NotesComponent } from "./pages";

const routes: Routes = [
  { path: "", component: NotesComponent },
  { path: ":noteId", component: NoteDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
