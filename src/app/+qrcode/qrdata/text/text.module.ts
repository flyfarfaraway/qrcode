
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TextFormComponent} from './text.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [TextFormComponent],
    exports: [TextFormComponent]
})
export class TextFormModule {

}