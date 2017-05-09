import { Component, Input, forwardRef, ExistingProvider } from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractControl } from '@angular/forms';


const ARRAY_FORM_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GenericFormComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';
import { IQrCode, IQrCodeData } from '../../shared/model/qrcode';

@Component({
    selector: 'generic-form',
    templateUrl: "generic.component.html",
    providers: [ARRAY_FORM_CONTROL_VALUE_ACCESSOR]
})
export class GenericFormComponent implements ControlValueAccessor {
    protected content = '';
    protected onChangeCallback = (v) => { };
    // type: string;

    // set value
    writeValue(data: IQrCodeData) {
       
        this.data = data;
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    // on edit
    onChange(data: IQrCodeData) {
        this.data = data;
       
        this.onChangeCallback(this.data);
    }

    @Input() type: string;

    @Input() data: any;

}


// import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
// import { IQrCode } from '../../shared/model/qrcode';
// import { cloneDeep } from 'lodash';

// @Component({
//   selector: 'generic-form',
//   templateUrl: './generic.component.html',
//   styleUrls: ['./generic.component.scss']
// })
// export class GenericFormComponent implements OnInit {

//   ngOnInit() {
//   }

//   Edit(record: IQrCode) {
//     this.record = cloneDeep(record);
//     this.type = record.type;
    
//   }

  

//   record: IQrCode;
//   type: string;

//   @Output() save = new EventEmitter();

// }
