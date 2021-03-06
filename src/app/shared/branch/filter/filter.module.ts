import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BranchFilterComponent } from './filter.component';
import { BranchFilterService } from './filter.service';
import { SelectCheckModule } from '../../shared';
import { UtilPipeModule } from '../../pipe';
import { AccordionModule } from '../../../x/ui/accordion/accordion';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, 
        UtilPipeModule, SelectCheckModule, AccordionModule
    ],
    declarations: [BranchFilterComponent],
    exports: [BranchFilterComponent, AccordionModule]
})
export class BranchFilterModule { }