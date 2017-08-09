import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import {
  ProgressIndicator
} from 'office-ui-fabric-react/lib/ProgressIndicator';

import styles from './FieldCustomizer.module.scss';

export interface IFieldCustomizerProps {
  percentComplete: number;
}

const LOG_SOURCE: string = 'FieldCustomizer';

export default class FieldCustomizer extends React.Component<IFieldCustomizerProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldCustomizer mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldCustomizer unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        <ProgressIndicator
          percentComplete={ this.props.percentComplete / 100 } />
      </div>
    );
  }
}
