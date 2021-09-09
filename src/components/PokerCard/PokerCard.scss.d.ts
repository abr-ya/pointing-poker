declare namespace PokerCardScssNamespace {
  export interface IPokerCardScss {
    activePokerCard: string;
    addCard: string;
    addIcon: string;
    bigPokerCard: string;
    lobbyCard: string;
    pokerCard: string;
    pokerCardValue: string;
    smallPokerCard: string;
  }
}

declare const PokerCardScssModule: PokerCardScssNamespace.IPokerCardScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PokerCardScssNamespace.IPokerCardScss;
};

export = PokerCardScssModule;
