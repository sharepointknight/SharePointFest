declare interface IMyCustomCommandCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'MyCustomCommandCommandSetStrings' {
  const strings: IMyCustomCommandCommandSetStrings;
  export = strings;
}
