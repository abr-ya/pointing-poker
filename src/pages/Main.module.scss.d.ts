declare namespace MainModuleScssNamespace {
  export interface IMainModuleScss {
    green: string;
    img: string;
    paper: string;
    title: string;
    title__string1: string;
    title__string2: string;
  }
}

declare const MainModuleScssModule: MainModuleScssNamespace.IMainModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainModuleScssNamespace.IMainModuleScss;
};

export = MainModuleScssModule;
