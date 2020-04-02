import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  initialize() {
    let lang = localStorage.getItem("lang");
    this.translate.addLangs(["en", "ru", "cz"]);
    if (!lang || !lang.match(/en|ru|cz/)) {
      lang = environment.defaultLanguage;
      localStorage.setItem("lang", lang);
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  setLang(key: string) {
    if (!key || !key.match(/en|ru|cz/)) {
      key = environment.defaultLanguage;
    }
    this.translate.use(key);
    localStorage.setItem("lang", key);
  }
}
