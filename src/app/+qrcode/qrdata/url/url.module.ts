
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UrlFormComponent} from './url.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [UrlFormComponent],
    exports: [UrlFormComponent]
})
export class UrlFormModule {

}