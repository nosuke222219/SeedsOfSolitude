declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  export = string;
}
declare module '*.jpg' {
  export = string;
}
declare module '*.png' {
  export = string;
}
declare module '*.gif' {
  export = string;
}
declare module '*.mp4' {
  export = string;
}
declare module '*.jpeg' {
  export = string;
}