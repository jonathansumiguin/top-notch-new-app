import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    userName: string = "";
    password: string = "";


    constructor(page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onReturnKey(args: {
        textboxValue: string,
        textboxType: string
    }) {
        if (args) {
            if (args.textboxType === "Password") {
                this.password = args.textboxValue;

                if (this.userName) {
                    this.doLogin();
                }
            }
            else if (args.textboxType === "Username") {
                this.userName = args.textboxValue;

                if (this.password) {
                    this.doLogin();
                }
            }
        }
    }

    onTextboxBlur(args: {
        textboxValue: string,
        textboxType: string
    }) {
        if (args && args.textboxType === "Password") {
            this.password = args.textboxValue;
        }
        else if (args.textboxType === "Username") {
            this.userName = args.textboxValue;
        }
    }

    doLogin() {

    }
}
