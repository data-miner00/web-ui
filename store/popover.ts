export const state = () => ({
  isVersionPopoverOpen: false,
  isLanguagePopoverOpen: false,
  isSearchPanelOpen: false,
})

export const mutations = {
  toggleVersionPopover(state: any) {
    state.isVersionPopoverOpen = !state.isVersionPopoverOpen
  },
  toggleLanguagePopover(state: any) {
    state.isLanguagePopoverOpen = !state.isLanguagePopoverOpen
  },
  toggleSearchPanel(state: any) {
    state.isSearchPanelOpen = !state.isSearchPanelOpen
  },
  setVersionPopover(state: any, open: boolean) {
    state.isVersionPopoverOpen = open
  },
  setLanguagePopover(state: any, open: boolean) {
    state.isLanguagePopoverOpen = open
  },
  setSearchPanel(state: any, open: boolean) {
    state.isSearchPanelOpen = open
  },
}
