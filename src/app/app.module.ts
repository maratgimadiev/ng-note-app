import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgbModalModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { NotesModule } from "./modules";
import { NoteEffects } from "./store/effects";
import { environment } from "src/environments/environment";
import { reducers, metaReducers } from "./store/reducers";
import { HeaderComponent } from "./components";
import { HttpLoaderFactory } from "./http-loader.factory";

const routes: Routes = [
  {
    path: "notes",
    loadChildren: () =>
      import("./modules/notes/notes.module").then(m => m.NotesModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
    SharedModule,
    NotesModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([NoteEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModalModule,
    NgbToastModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
