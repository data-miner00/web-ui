import { mount } from '@vue/test-utils'
import DarkModeButton from '../components/DarkModeButton.vue'

describe('Dark mode button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DarkModeButton)
    expect(wrapper.vm).toBeTruthy()
  })

  /* Add test with localStorage mock */
})
