import { Injectable } from "@angular/core";
import { NoteFormComponent } from "../components/note-form/note-form.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { INote, INoteForm } from "@models";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor(private ngModal: NgbModal) {}

  showNoteForm(note: INote, edit: boolean = true): Promise<INoteForm> {
    const modalRef = this.ngModal.open(NoteFormComponent);
    modalRef.componentInstance.editMode = edit;
    modalRef.componentInstance.note = note;
    return new Promise((resolve, reject) => {
      return modalRef.result
        .then(({ action, note: newNote }) => {
          const submit = action === "submit";
          const result = { note: newNote, submit } as INoteForm;
          resolve(result);
        })
        .catch(() => {
          reject();
        });
    });
  }
}
