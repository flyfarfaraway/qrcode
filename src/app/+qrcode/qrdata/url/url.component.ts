import { Component, Input, forwardRef, ExistingProvider } from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractControl } from '@angular/forms';


const ARRAY_FORM_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UrlFormComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'url-form',
    template: `
    <input type="text" [ngModel]="content" (ngModelChange)="onChange($event)" />
    `,
    providers: [ARRAY_FORM_CONTROL_VALUE_ACCESSOR]
})
export class UrlFormComponent implements ControlValueAccessor {
    protected content = '';
    protected onChangeCallback = (v) => { };

    // set value
    writeValue(content: string) {
        this.content = content;
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    // on edit
    onChange(content: string) {
        this.content = content;
        this.onChangeCallback(this.content);
    }

    

}


