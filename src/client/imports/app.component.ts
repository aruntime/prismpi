/**
 * Created by ArunKumar on 03-04-2017.
 */
import { Component } from '@angular/core';
// and last but not least the template
// noinspection TypeScriptCheckImport
import template from './app.component.html';

@Component({
    selector: 'app',
    template
})
export class JobTracker { name = 'Angular'; }