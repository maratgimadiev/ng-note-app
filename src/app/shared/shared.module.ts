import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TruncatePipe } from "./pipes";
import { NoteFormComponent } from "./components";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { HttpLoaderFactory } from "../http-loader.factory";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastContainerComponent } from "./components/toast-container/toast-container.component";

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    ReactiveFormsModule,
    NgbToastModule
  ],
  declarations: [TruncatePipe, NoteFormComponent, ToastContainerComponent],
  entryComponents: [NoteFormComponent, ToastContainerComponent],
  exports: [TruncatePipe, ToastContainerComponent]
})
export class SharedModule {}
