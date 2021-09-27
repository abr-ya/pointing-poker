declare namespace MemberModuleScssNamespace {
  export interface IMemberModuleScss {
    container: string;
    info: string;
    name: string;
    position: string;
  }
}

declare const MemberModuleScssModule: MemberModuleScssNamespace.IMemberModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MemberModuleScssNamespace.IMemberModuleScss;
};

export = MemberModuleScssModule;
