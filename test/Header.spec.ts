import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '~/components/Header.vue'
import DarkModeButton from '../components/DarkModeButton.vue'
import VersionButton from '~/components/VersionButton.vue'
import BannerLink from '~/components/BannerLink.vue'

describe('Header component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      components: {
        DarkModeButton,
        VersionButton,
        BannerLink,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
