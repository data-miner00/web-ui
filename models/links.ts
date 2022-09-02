export type Link = {
  title: string
  url: string
}

export type MainLink = Link & {
  icon?: string
}

export type Category = {
  section: string
  basepath: string
  links: Array<Link>
}
