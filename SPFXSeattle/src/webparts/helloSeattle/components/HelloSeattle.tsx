import * as React from 'react';
import styles from './HelloSeattle.module.scss';
import { IHelloSeattleProps } from './IHelloSeattleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloSeattle extends React.Component<IHelloSeattleProps, void> {

  public render(): React.ReactElement<IHelloSeattleProps> {
    return (
      <div className={styles.helloSeattle}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint Fest Seattle!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>{this.props.message2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
