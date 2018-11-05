import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TabComponent } from "./components/tab/tab.component";

import { HomeComponent } from "~/app/home/home.component";
import { LoginComponent } from "~/app/login/login.component";


@NgModule({
    bootstrap: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TabComponent
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
