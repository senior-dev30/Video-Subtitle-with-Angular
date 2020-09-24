import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from 'src/app/common/material.module';
import { NouisliderModule } from 'ng2-nouislider';
@NgModule({
  declarations: [
    MainComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule,
    NouisliderModule
  ]
})
export class MainModule { }
