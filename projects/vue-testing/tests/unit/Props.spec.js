import { shallowMount } from '@vue/test-utils'
import CProps from '@/components/Props.vue'

describe('Test Props', () => {
  it('Check text minlength', async () => {
    const wrapper = shallowMount(CProps, {
      propsData: {
        minlength: 10
      }
    })
    await wrapper.setData({
      text: 'abcde'
    })
    expect(wrapper.find('#info').exists()).toBe(true)
    expect(wrapper.get('#info').text()).toContain(`Text must be at least 10 characters`)

    await wrapper.setProps({
      minlength: 5
    })
    expect(wrapper.find('#info').exists()).toBe(false)
  })
})
