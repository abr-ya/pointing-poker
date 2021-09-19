declare namespace IssueModuleScssNamespace {
  export interface IIssueModuleScss {
    active: string;
    container: string;
    info: string;
    issueText: string;
    priority: string;
  }
}

declare const IssueModuleScssModule: IssueModuleScssNamespace.IIssueModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IssueModuleScssNamespace.IIssueModuleScss;
};

export = IssueModuleScssModule;
