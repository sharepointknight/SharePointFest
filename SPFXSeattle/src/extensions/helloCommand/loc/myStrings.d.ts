declare interface IHelloCommandStrings {
  Command1: string;
  Command2: string;
}

declare module 'helloCommandStrings' {
  const strings: IHelloCommandStrings;
  export = strings;
}
