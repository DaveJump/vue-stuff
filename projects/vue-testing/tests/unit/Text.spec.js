import { shallowMount } from '@vue/test-utils'
import Text from '@/components/Text.vue'

describe('Base Test', () => {
  it('Text Equal', () => {
    const wrapper = shallowMount(Text)
    expect(wrapper.text()).toMatch('Hello Vue Testing')
  })
})
