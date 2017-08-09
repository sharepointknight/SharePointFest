import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloSeattleStrings';
import HelloSeattle from './components/HelloSeattle';
import { IHelloSeattleProps } from './components/IHelloSeattleProps';
import { IHelloSeattleWebPartProps } from './IHelloSeattleWebPartProps';

export default class HelloSeattleWebPart extends BaseClientSideWebPart<IHelloSeattleWebPartProps> {

  
  public render(): void {
    var myVariable = "Howdy Partna";
    
    const element: React.ReactElement<IHelloSeattleProps > = React.createElement(
      HelloSeattle,
      {
        description: this.properties.description,
        message2: this.properties.message2
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                
                PropertyPaneTextField('message2', {
                  label: strings.MessageFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
