declare type ICallback<T = unknown, E = Error | null> = (error?: E, data?: T) => void

declare type IIterable<T = unknown> = Array<T>

declare interface IRichText extends React.HTMLAttributes<HTMLElement> {
  tag: string
  content: string
  style?: React.CSSProperties
  className?: string
}

declare interface IAnchor {
  title: string
  url: string
  target?: string
}
