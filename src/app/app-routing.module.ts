import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "~/app/home/home.component";
import { LoginComponent } from "~/app/login/login.component";

import { LoginModule } from "~/app/login/login.module";
import { HomeModule } from "~/app/home/home.module";
import { HomeRoutingModule } from "~/app/home/home-routing.module";
import { LoginRoutingModule } from "~/app/login/login-routing.module";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [
        HomeModule,
        LoginModule,
        NativeScriptRouterModule.forRoot(routes),
        HomeRoutingModule,
        LoginRoutingModule],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
