import { shallowMount } from '@vue/test-utils'
import CSlots from '@/components/Slots.vue'
import SlotBar from '@/components/SlotBar.vue'

describe('Test slots', () => {
  it('Default slots', () => {
    const wrapper = shallowMount(CSlots, {
      slots: {
        default: 'default title'
      }
    })
    expect(wrapper.text()).toContain('default title')
  })

  it('Named slots', () => {
    const wrapper = shallowMount(CSlots, {
      slots: {
        // Can also pass an array with template string or Vue-Component
        header: ['<div id="one">one</div>', SlotBar],
        footer: 'footer'
      }
    })
    expect(wrapper.get('#one').text()).toContain('one')
    expect(wrapper.get('[data-slot="bar"]').text()).toContain('Bar Bar')
    expect(wrapper.get('footer').text()).toContain('footer')
  })

  it('Scoped slots', () => {
    const wrapper = shallowMount(CSlots, {
      scopedSlots: {
        main: `
          <template #main="data">
            <div>{{ data.msg }}</div>
          </template>
        `
      }
    })
    expect(wrapper.get('main').text()).toContain('Message')
  })
})
