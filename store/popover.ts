export const state = () => ({
  isVersionPopoverOpen: false,
  isLanguagePopoverOpen: false,
})

export const mutations = {
  toggleVersionPopover(state: any) {
    state.isVersionPopoverOpen = !state.isVersionPopoverOpen
  },
  toggleLanguagePopover(state: any) {
    state.isLanguagePopoverOpen = !state.isLanguagePopoverOpen
  },
  setVersionPopover(state: any, open: boolean) {
    state.isVersionPopoverOpen = open
  },
  setLanguagePopover(state: any, open: boolean) {
    state.isLanguagePopoverOpen = open
  },
}
