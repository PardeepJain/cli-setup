import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliSetupAppComponent } from '../app/cli-setup.component';

beforeEachProviders(() => [CliSetupAppComponent]);

describe('App: CliSetup', () => {
  it('should create the app',
      inject([CliSetupAppComponent], (app: CliSetupAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-setup works!\'',
      inject([CliSetupAppComponent], (app: CliSetupAppComponent) => {
    expect(app.title).toEqual('cli-setup works!');
  }));
});
