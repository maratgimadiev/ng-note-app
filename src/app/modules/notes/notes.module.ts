import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-module.routing";

import { NotesComponent, NoteDetailsComponent } from "./pages";
import { NotesListComponent, NotesListItemComponent } from "./components";
import { LoadingComponent, ErrorComponent } from "@components";
import { SharedModule } from "@shared";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/app/http-loader.factory";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [NotesComponent, NoteDetailsComponent],
  declarations: [
    NoteDetailsComponent,
    NotesListComponent,
    NotesListItemComponent,
    NotesComponent,
    NoteDetailsComponent,
    LoadingComponent,
    ErrorComponent
  ]
})
export class NotesModule {}
