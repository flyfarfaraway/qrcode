
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PhoneFormComponent } from './phone.component';


@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [PhoneFormComponent],
    exports: [PhoneFormComponent]
})
export class PhoneFormModule {

}