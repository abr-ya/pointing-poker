declare namespace ScoreCardModuleScssNamespace {
  export interface IScoreCardModuleScss {
    active: string;
    container: string;
    info: string;
    scoreText: string;
  }
}

declare const ScoreCardModuleScssModule: ScoreCardModuleScssNamespace.IScoreCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ScoreCardModuleScssNamespace.IScoreCardModuleScss;
};

export = ScoreCardModuleScssModule;
