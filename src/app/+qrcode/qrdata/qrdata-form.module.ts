import { NgModule } from '@angular/core';
import { TextFormModule } from './text/text.module';
import { CommonModule } from '@angular/common';
import { UrlFormModule } from './url/url.module';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TextFormModule,UrlFormModule],
})
export class QrDataFormModule { }