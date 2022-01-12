import { shallowMount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import VersionButton from '~/components/VersionButton.vue'

describe('Version button component', () => {
  //@ts-ignore
  let wrapper: Wrapper<VersionButton>

  beforeAll(() => {
    jest.spyOn(window, 'addEventListener')
  })

  beforeEach(() => {
    wrapper = shallowMount(VersionButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('calls addEventListener on mount', () => {
    expect(window.addEventListener).toHaveBeenCalled()
  })

  it('should set the isPopoverOpen flag to true when button is clicked', () => {
    expect(wrapper.vm.$data.isPopoverOpen).toBe(false)

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.$data.isPopoverOpen).toBe(true)
  })
})
