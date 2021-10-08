import { shallowMount } from '@vue/test-utils'
import Condition from '@/components/Condition.vue'

describe('Condition Test', () => {

  it('Profile not exist', () => {
    const wrapper = shallowMount(Condition)
    // Logout status is default
    const profile = wrapper.find('#profile')
    expect(profile.exists()).toBe(false)
  })

  it('Profile exist', () => {
    // Set login status
    const wrapper = shallowMount(Condition, {
      data() {
        return {
          auth: true
        }
      }
    })
    const profile = wrapper.find('#profile')
    expect(profile.exists()).toBe(true)
  })

  it('Drop-Down is visible', () => {
    const wrapper = shallowMount(Condition, {
      data() {
        return {
          ddShow: true
        }
      }
    })
    const dd = wrapper.get('#drop-down')
    expect(dd.isVisible()).toBe(true)
  })
})
