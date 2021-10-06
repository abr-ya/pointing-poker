declare namespace PokerCardModuleScssNamespace {
  export interface IPokerCardModuleScss {
    active: string;
    activeCover: string;
    addCard: string;
    addIcon: string;
    bigCard: string;
    cardBack: string;
    cardContainer: string;
    cardFront: string;
    editIcon: string;
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
