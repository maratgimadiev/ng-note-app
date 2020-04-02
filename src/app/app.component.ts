import { Component } from "@angular/core";
import { LanguageService } from "./shared/services/language.service";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <div class="container mt-2 mb-2">
      <router-outlet></router-outlet>
    </div>
    <div class="toast-container">
      <app-toast-container></app-toast-container>
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private languageService: LanguageService) {
    this.languageService.initialize();
  }
}
