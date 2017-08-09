declare interface ICommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'commandSetStrings' {
  const strings: ICommandSetStrings;
  export = strings;
}
