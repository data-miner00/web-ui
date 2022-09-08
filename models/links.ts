/*
 * The model for the links that appears on the sidebar.
 * Currently used for subcategory link items.
 */
export type Link = {
  title: string
  url: string
}

/*
 * The link for the sidebar at the very top section.
 */
export type MainLink = Link & {
  icon?: string
}

/*
 * The model that groups the sublink into a logical section.
 */
export type Category = {
  section: string
  basepath: string
  links: Array<Link>
}
