import { Component } from '@angular/core';

const logoLink = "./assets/img/logo.png"

@Component({
    selector: 'logo',
    template: `<img [src]="src" alt="Miraway">`
})
export class LogoComponent {
    src = logoLink;
}