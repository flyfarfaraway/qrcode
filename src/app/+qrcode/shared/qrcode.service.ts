import { Injectable } from '@angular/core';
import { HttpServiceGenerator } from './shared';
import { IQrCode, QrCode, IQrCodeData } from './model';

@Injectable()
export class QrcodeService {

  constructor(
    private hsg: HttpServiceGenerator
  ) { }

  /**
   * 
   * @param data the content of the code
   */

  Create(data: IQrCodeData) {
    return this.api.Post<IQrCode>("qrcode-api/create", {}, 
      data
    ).map(q => new QrCode(q));
  }

  /**
   * 
   * @param id make the link to the image 
   */

  MakeImageLink(id: string) {
    console.log(id);
    return this.api.MakeURL("static/img/"+ id + "/", {id:id});
  }

  /**
   * the api to the backend
   */

  private api = this.hsg.make("/api");
}
