import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { INote } from "@models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-note-form",
  templateUrl: "./note-form.component.html",
  styleUrls: ["./note-form.component.scss"]
})
export class NoteFormComponent implements OnInit {
  @Input() note: INote;
  @Input() editMode: boolean;
  noteForm: FormGroup;
  constructor(private ngbActiveModal: NgbActiveModal, private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      name: ["", Validators.required],
      description: ""
    });
  }
  close() {
    this.ngbActiveModal.close({ action: "cancel" });
  }
  submit() {
    const note = {
      ...this.note,
      name: this.noteForm.controls.name.value,
      description: this.noteForm.controls.description.value
    } as INote;
    this.ngbActiveModal.close({ note, action: "submit" });
  }

  ngOnInit() {
    if (this.editMode) {
      this.noteForm.controls.name.patchValue(this.note.name);
      this.noteForm.controls.description.patchValue(this.note.description);
    }
  }
}
