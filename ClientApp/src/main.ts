import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}
  
window.addEventListener('resize', appHeight);
appHeight();