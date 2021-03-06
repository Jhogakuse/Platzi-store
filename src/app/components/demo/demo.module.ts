import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DemoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DemoRoutingModule
    ]
})
export class DemoModule {
}
