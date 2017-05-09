import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QrCodeServiceProvider } from './qrcode-provider';
import { SessionValidationGuard } from '../auth';
import { QrDataFormModule } from './qrdata';

const routing = RouterModule.forChild([
  {
    path: "", component: QrcodeComponent,
    //  canActivate: [SessionValidationGuard] 
  }
])

@NgModule({
  imports: [
    SharedModule, routing, QrDataFormModule
  ],
  exports: [
  ],
  declarations: [QrcodeComponent],
  providers: [QrCodeServiceProvider]
})
export class QrCodeModule { }
