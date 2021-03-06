import { Component, Input, forwardRef, ExistingProvider } from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

import { AbstractControl } from '@angular/forms';


const ARRAY_FORM_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UrlFormComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';

interface IUrl {
    url: string;

}

@Component({
    selector: 'url-form',
    templateUrl: 'url.component.html',
    providers: [ARRAY_FORM_CONTROL_VALUE_ACCESSOR]
})
export class UrlFormComponent implements ControlValueAccessor {
    protected link: IUrl = { url: '' };
    protected onChangeCallback = (v) => { };
    content = new FormGroup({

    });
    // set value
    writeValue(url?: IUrl) {
        this.link = url || {url:''};
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    // on edit
    onContentChange(content: string) {
        this.link.url = content;
        this.onChangeCallback(this.link);
    }



}


