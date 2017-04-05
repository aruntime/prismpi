
// Angular 2 imports
import 'angular2-meteor-polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// JobTracker app classes
import { AppModule } from '../client/imports/app.module';

const platform = platformBrowserDynamic().bootstrapModule(AppModule);