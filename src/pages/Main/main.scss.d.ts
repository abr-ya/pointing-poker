declare namespace MainScssNamespace {
  export interface IMainScss {
    green: string;
    img: string;
    paper: string;
    title: string;
    title__string1: string;
    title__string2: string;
  }
}

declare const MainScssModule: MainScssNamespace.IMainScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainScssNamespace.IMainScss;
};

export = MainScssModule;
