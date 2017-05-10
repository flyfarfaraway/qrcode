import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { QrcodeService, HttpError } from '../shared';
import { IQrCode } from '../shared/model/';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.web.html',
  styleUrls: ['./qrcode.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class QrcodeComponent implements OnInit {
  constructor(
    private qcodeService: QrcodeService
  ) { }


  ngOnInit() {
  }

  // Generate(data: string) {
  //   this.qcodeService.Generate(data).subscribe(id => {
  //     this.link = this.qcodeService.MakeImageLink(id);
  //   }, (e: HttpError) => {
  //     this.message = `Error: ${e.Message()}`;
  //   });
  // }
  Create() {
    // const urlInput = this.urlForm.value;

    const data = this.form.value;
    console.log(data);

    this.qcodeService.Create(data).subscribe(q => {
      this.link = this.qcodeService.MakeImageLink(q.id, q.path_img);
console.log(this.link);
    }, (e: HttpError) => {
      this.message = `Error: ${e.Message()}`;
    });
  }
  // get url(): any { return this.form.get('url'); }

  tabIndex: number = 1;
  type: string;
  link = "";
  message = "no error";

  private makeForm(q?: IQrCode) {
    q = q || <any>{};
    return new FormGroup({
      name: new FormControl(q.name, Validators.required),
      type: new FormControl(q.type, Validators.required),
      mode: new FormControl(q.mode),
      data: new FormControl(q.data)
    });
  }

  form = this.makeForm();

  changeTab(tabIndex,type: string) {
    this.tabIndex = tabIndex;
    this.type = type;
  }

  Submit() {
    console.log("send", this.form.value);

  }

}
