import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatTableModule } from '@angular/material/table'
import { MatSliderModule } from "@angular/material/slider"

@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatTableModule
    ]
})

export class MaterialModule {}