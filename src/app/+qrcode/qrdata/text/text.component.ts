import { Component, Input, forwardRef, ExistingProvider } from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

import { AbstractControl } from '@angular/forms';


const ARRAY_FORM_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFormComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';

interface IText {
    content: string;

}

@Component({
    selector: 'text-form',
    templateUrl: 'text.component.html',
    providers: [ARRAY_FORM_CONTROL_VALUE_ACCESSOR]
})
export class TextFormComponent implements ControlValueAccessor {
    protected text: IText = { content: '' };
    protected onChangeCallback = (v) => { };
    content = new FormGroup({

    });
    // set value
    writeValue(text?: IText) {
        this.text = text || {content:''};
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    // on edit
    onContentChange(content: string) {
        this.text.content = content;
        this.onChangeCallback(this.text);
    }



}


