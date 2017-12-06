import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import Header from "./components/header";
import * as strings from 'MyappCustomizerApplicationCustomizerStrings';

const LOG_SOURCE: string = 'MyappCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IMyappCustomizerApplicationCustomizerProperties {
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class MyappCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IMyappCustomizerApplicationCustomizerProperties> {

  private _topPlaceholder: PlaceholderContent | undefined;
  private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    // Added to handle possible changes on the existence of placeholders.
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
    
    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();
    return Promise.resolve<void>();
  }
  private _renderPlaceHolders(): void {
    
    console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
    console.log('Available placeholders: ',
      this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));
    
        // Handling the top placeholder
        if (!this._topPlaceholder) {
      this._topPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Top,
          { onDispose: this._onDispose });
    
      // The extension should not assume that the expected placeholder is available.
      if (!this._topPlaceholder) {
        console.error('The expected placeholder (Top) was not found.');
        return;
      }
    
      if (this.properties) {
        if (this._topPlaceholder.domElement) {
          const elem = React.createElement(Header);
          ReactDOM.render(elem, this._topPlaceholder.domElement);
        }
      }
        }
    
        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose });
    
      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error('The expected placeholder (Bottom) was not found.');
        return;
      }
    
      if (this.properties) {
        let bottomString: string = this.properties.Bottom;
        if (!bottomString) {
          bottomString = '(Bottom property was not defined.)';
        }
    
        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
            <div class="">
              <div class="ms-bgColor-themeDark ms-fontColor-white">
                <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${bottomString}
              </div>
            </div>`;
        }
      }
        }
      }
  private _onDispose(): void {
  }
}
