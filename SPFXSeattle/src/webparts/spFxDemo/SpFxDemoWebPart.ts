import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxDemoWebPartStrings';
import SpFxDemo from './components/SpFxDemo';
import { ISpFxDemoProps } from './components/ISpFxDemoProps';

export interface ISpFxDemoWebPartProps {
  description: string;
}

export default class SpFxDemoWebPart extends BaseClientSideWebPart<ISpFxDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxDemoProps > = React.createElement(
      SpFxDemo,
      {
        description: this.properties.description
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
