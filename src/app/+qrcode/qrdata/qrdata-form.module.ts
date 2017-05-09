import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GenericFormModule } from './generic/generic.module';

@NgModule({
    imports: [
        CommonModule, GenericFormModule
    ],
    exports: [ GenericFormModule],
})
export class QrDataFormModule { }