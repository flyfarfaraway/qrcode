export interface IQrCodeData {
    [index: string]: any;
}

type QrCodeType = "text" | "url";

export interface IQrCode {
    id: string;
    name: string;
    data: IQrCodeData;
    template: string;
    type: string;
    img: string;
    mode: 'static' | 'dynamic';
}

export class QrCode {
    constructor(private _q: IQrCode) { }
    id = this._q.id;
    name = this._q.name;
    data = this._q.data;
    template = this._q.template;
    img = this._q.img;
    mode = this._q.mode;
    type = this._q.type;
}

export interface Data {
    qr_data: DataQr[];
}

interface DataQr {
    url: string;
}
interface UrlData {
    url: string;
}