import './jasmine.ts';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';

import 'zone.js/dist/jasmine-patch';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import './app/shared/store/auth.actions.spec.ts';
import './app/shared/store/auth.reducer.spec.ts';
import './app/shared/store/auth.selectors.spec.ts';

declare global {
  interface Window {
    jasmineRef: any;
  }
}

(function bootstrap() {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  // Bootstrap Jasmine
  window.onload(new Event('anything'));
  window.jasmineRef = jasmine.getEnv();

  // Bootstrap Angular testing
  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
})();
