import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "qrcode", loadChildren: "./+qrcode/index" },
    { path: "setting", loadChildren: "./setting/index" },
    { path: "auth", loadChildren: "./auth/index#AuthModule" },
    { path: "", pathMatch: "full", redirectTo: "qrcode" }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
    imports: [appRouting],
    exports: [RouterModule]
})
export class AppRoutingModule {

}