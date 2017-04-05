/**
 * Created by ArunKumar on 03-04-2017.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { Routers } from './app.routers';
import { Home } from './home/home';
import { Info } from './info/info';
import { JobTracker }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(Routers), ],
    // Components, Pipes, Directive
    declarations: [ JobTracker, Home, Info ],
    bootstrap:    [ JobTracker ]
})
export class AppModule { }