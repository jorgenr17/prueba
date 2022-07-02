import { mount } from '@vue/test-utils'
import home from '@/modules/home/components/index.vue'
import navBarHome from '@/modules/home/components/navBar.vue'

describe('home/index.vue', () => {
  it('Find navBar home', () => {
    const wrapper = mount(home)
    const nav = wrapper.findComponent(navBarHome)
    expect(nav.exists()).toBe(true)
  })

  it('Execute order in mount', () => {
    const wrapper = mount(home)
    expect(wrapper.find('.table').exists()).toBe(true)
  })

  it('Get orders is called', () => {
    const spyFunction = jest.spyOn(home.methods, 'getOrders')
    mount(home, {
      propsData: {
        pagination: { page: 0, limit: 5 }
      }
    })
    expect(spyFunction).toBeCalled()
    spyFunction.mockReset()
  })
})
