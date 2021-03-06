import { 
    Component, Input, forwardRef, ExistingProvider, HostListener,
    Output, EventEmitter 
} from '@angular/core';

import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractControl } from '@angular/forms';

import { FileNode } from '../backend/';

const FILE_PICKER_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilePickerComponent),
    multi: true
}

import { FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'file-picker',
    template: `
        <input class="edit-image margin-top" [(ngModel)]="value"/> 
        <br>
        <button class="hlm-button margin-top" (click)="modal.Open()">Chọn</button>
        <modal #modal id="modalUpload">
            <div class="modal-dialog">
                <div class="modal-body padding-20">
                    <div class="file-browser">
                        <file-browser (select)="choose($event)"></file-browser>
                    </div>
                    <button class="btn-hlm btn-close" (click)="modal.Close()">Close</button>
                </div>
            </div>
        </modal>
    `,
    styles: [`
        .modal-dialog{
            width: 35vw;
        }
    `],
   
    providers: [FILE_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class FilePickerComponent implements ControlValueAccessor {

    protected value = '';
    protected onChangeCallback = (v) => { };

    writeValue(data: string) {
        this.value = data;
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {

    }

    choose(node: FileNode) {
        this.value = node.Path;
        this.onChange();
        this.change.next();
    }

    @HostListener("change") onChange() {
        this.onChangeCallback(this.value);
    } 

    @Output() change = new EventEmitter();

}
