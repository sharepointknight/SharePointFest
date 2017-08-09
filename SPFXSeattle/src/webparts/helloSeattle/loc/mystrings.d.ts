declare interface IHelloSeattleStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  MessageFieldLabel: string;
}

declare module 'helloSeattleStrings' {
  const strings: IHelloSeattleStrings;
  export = strings;
}
