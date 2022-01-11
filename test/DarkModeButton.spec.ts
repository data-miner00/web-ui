import { shallowMount } from '@vue/test-utils'
import DarkModeButton from '../components/DarkModeButton.vue'

describe('Dark mode button', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(DarkModeButton)
    expect(wrapper.vm).toBeTruthy()
  })

  /* Add test with localStorage mock */
})
