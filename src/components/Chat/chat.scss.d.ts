declare namespace ChatScssNamespace {
  export interface IChatScss {
    message: string;
    messageBody: string;
    messageBox: string;
    messageInner: string;
    messageList: string;
    messageSender: string;
    my: string;
    wrapper: string;
  }
}

declare const ChatScssModule: ChatScssNamespace.IChatScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ChatScssNamespace.IChatScss;
};

export = ChatScssModule;
