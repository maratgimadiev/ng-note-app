import { Component, OnInit, TemplateRef } from "@angular/core";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-toast-container",
  templateUrl: "./toast-container.component.html",
  styleUrls: ["./toast-container.component.scss"]
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}
  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
