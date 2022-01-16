import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Sidebar from '~/components/Sidebar.vue'

describe('Header component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Sidebar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
