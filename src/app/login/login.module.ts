import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { TabComponent } from "~/app/components/tab/tab.component";

@NgModule({
        imports: [
                NativeScriptCommonModule,
                LoginRoutingModule
        ],
        declarations: [
        ],
        schemas: [
                NO_ERRORS_SCHEMA
        ]
})
export class LoginModule { }
