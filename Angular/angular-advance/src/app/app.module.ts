import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CammelCase } from './camelcase.pipe';
import { ChainPipe } from './chainpipe.pipe';
import { MbToGb } from './mbtogb.pipe';
import { Square } from './square.pipe';
import { SquareRoot } from './squareroot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Square,
    SquareRoot,
    MbToGb,
    CammelCase,
    ChainPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
