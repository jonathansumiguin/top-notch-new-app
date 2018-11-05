import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(page: Page) {
        page.actionBarHidden = false;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
