declare namespace NavScssNamespace {
  export interface INavScss {
    logo: string;
    navigation: string;
  }
}

declare const NavScssModule: NavScssNamespace.INavScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavScssNamespace.INavScss;
};

export = NavScssModule;
