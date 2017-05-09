
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TextFormModule } from '../text/text.module';
import {UrlFormModule} from '../url/url.module';
// import { TextFormComponent } from '../text/text.component';
// import { UrlFormComponent } from '../url/url.component';
import { GenericFormComponent } from './generic.component';


@NgModule({
    imports: [FormsModule, CommonModule, TextFormModule, UrlFormModule],
    declarations: [GenericFormComponent],
    exports: [GenericFormComponent]
})
export class GenericFormModule {

}