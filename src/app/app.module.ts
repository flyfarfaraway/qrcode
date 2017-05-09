import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CoreModule } from './shared/core.module';
import { AuthProvider } from './auth';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [AuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
