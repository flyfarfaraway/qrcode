
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TextFormModule } from '../text/text.module';
import {UrlFormModule} from '../url/url.module';

import { GenericFormComponent } from './generic.component';
import { PhoneFormModule } from '../phone/phone.module';


@NgModule({
    imports: [FormsModule, CommonModule, TextFormModule, UrlFormModule, PhoneFormModule],
    declarations: [GenericFormComponent],
    exports: [GenericFormComponent]
})
export class GenericFormModule {

}