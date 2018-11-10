import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "~/app/home/home.component";
import { LoginComponent } from "~/app/login/login.component";
import { AppComponent } from "./app.component";

import { TabComponent } from "./components/tab/tab.component";
import { ButtonComponent } from "./components/button/button.component";
import { TextInputComponent } from "./components/textinput/text-input.component";




@NgModule({
    bootstrap: [
        LoginComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        TabComponent,
        ButtonComponent,
        TextInputComponent
    ],
    entryComponents: [
        LoginComponent,
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
