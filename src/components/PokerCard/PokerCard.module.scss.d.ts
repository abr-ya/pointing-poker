declare namespace PokerCardModuleScssNamespace {
  export interface IPokerCardModuleScss {
    activePokerCard: string;
    addCard: string;
    addIcon: string;
    bigCard: string;
    editIcon: string;
    lobbyCard: string;
    pokerCard: string;
    pokerCardValue: string;
    smallCard: string;
  }
}

declare const PokerCardModuleScssModule: PokerCardModuleScssNamespace.IPokerCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PokerCardModuleScssNamespace.IPokerCardModuleScss;
};

export = PokerCardModuleScssModule;
