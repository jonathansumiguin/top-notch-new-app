import { Component } from "@angular/core";
import { Page } from "ui/page";
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(page: Page) {
        page.actionBarHidden = true; 
    }
}
