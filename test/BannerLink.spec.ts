import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import BannerLink from '~/components/BannerLink.vue'

describe('Banner Link component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(BannerLink, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
