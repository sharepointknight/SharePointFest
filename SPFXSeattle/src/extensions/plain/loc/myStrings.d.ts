declare interface IPlainStrings {
  Title: string;
}

declare module 'plainStrings' {
  const strings: IPlainStrings;
  export = strings;
}
