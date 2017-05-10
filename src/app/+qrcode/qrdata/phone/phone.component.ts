import { Component, Input, forwardRef, ExistingProvider } from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

import { AbstractControl } from '@angular/forms';


const ARRAY_FORM_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PhoneFormComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';

interface IPhone {
    content: string;

}

@Component({
    selector: 'phone-form',
    templateUrl: 'phone.component.html',
    providers: [ARRAY_FORM_CONTROL_VALUE_ACCESSOR]
})
export class PhoneFormComponent implements ControlValueAccessor {
    protected phone_number: IPhone = { content: '' };
    protected onChangeCallback = (v) => { };
    content = new FormGroup({

    });
    // set value
    writeValue(content?: IPhone) {
        this.phone_number = content || {content:''};
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    // on edit
    onContentChange(content: string) {
        this.phone_number.content = content;
        this.onChangeCallback(this.phone_number);
    }



}


