import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";
import { LanguageService } from "@shared";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  showDropdownOptions = false;
  @ViewChild("dropdown", { static: true }) spanWrapper;
  constructor(
    private el: ElementRef,
    private languageService: LanguageService
  ) {}

  setLang(key: string) {
    this.languageService.setLang(key);
    this.showDropdownOptions = false;
  }

  @HostListener("document:click", ["$event"])
  onclick(e) {
    if (!this.el.nativeElement.contains(e.target)) {
      this.showDropdownOptions = false;
    }
  }
}
