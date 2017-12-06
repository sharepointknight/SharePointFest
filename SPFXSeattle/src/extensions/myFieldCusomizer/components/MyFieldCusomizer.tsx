import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './MyFieldCusomizer.module.scss';

export interface IMyFieldCusomizerProps {
  text: string;
}

const LOG_SOURCE: string = 'MyFieldCusomizer';

export default class MyFieldCusomizer extends React.Component<IMyFieldCusomizerProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFieldCusomizer mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: MyFieldCusomizer unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        P{ this.props.text }%
      </div>
    );
  }
}
