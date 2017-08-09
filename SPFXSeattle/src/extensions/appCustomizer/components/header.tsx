import * as React from 'react';

export default class Header extends React.Component<null, null> {

  public render(): JSX.Element {    
    return <div>
      <h1><img width="400" src="https://sharepointknight.sharepoint.com/SiteAssets/SPKnightLogoHeader.jpg" /> My Cool Header</h1>
    </div>;
  }
}