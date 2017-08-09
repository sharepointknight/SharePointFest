import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, Placeholder
} from '@microsoft/sp-application-base';
import Header from "./components/header";

import * as strings from 'appCustomizerStrings';

const LOG_SOURCE: string = 'AppCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAppCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IAppCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    return Promise.resolve<void>();
  }

  @override
  public onRender(): void {
    const header: Placeholder = this.context.placeholders.tryAttach('PageHeader', {
      onDispose: this._onDispose
    });
    if (!header) {
      Log.error(LOG_SOURCE, new Error('Could not find placeholder PageHeader'));
      return;
    }

    const elem = React.createElement(Header);
    ReactDOM.render(elem, header.domElement);
  }
  private _onDispose(): void {
  }
}
