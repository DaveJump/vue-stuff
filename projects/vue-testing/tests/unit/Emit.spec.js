import { shallowMount } from '@vue/test-utils'
import CEmit from '@/components/Emit.vue'

describe('Emit event test', () => {
  it('Event emitted', () => {
    const wrapper = shallowMount(CEmit)
    const button = wrapper.get('#button')
    button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('increment')
    expect(wrapper.emitted().increment).toBeTruthy()
  })

  it('Event values', () => {
    const wrapper = shallowMount(CEmit)
    const button = wrapper.get('#button')
    button.trigger('click') // count + 1
    expect(wrapper.emitted().increment[0]).toEqual([1])
    button.trigger('click') // count + 1
    expect(wrapper.emitted().increment[1]).toEqual([2])
    button.trigger('click') // count + 1
    expect(wrapper.emitted().increment[2]).toEqual([{ count: 3, even: false }])
  })
})
