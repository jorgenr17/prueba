import { mount } from '@vue/test-utils'
import formOrder from '@/modules/order/components/formOrder.vue'

describe('orders/formOrder.vue', () => {
  it('Execute save order', async () => {
    const $route = {
      params: {}
    }
    const spyFunction = jest.spyOn(formOrder.methods, 'saveOrder')
    const wrapper = mount(formOrder, {
      mocks: {
        $route
      }
    })
    const orderForm = wrapper.find('#orderForm')
    await orderForm.trigger('submit')
    expect(spyFunction).toBeCalled()
  })

  it('Execute update order', async () => {
    const $route = {
      params: { id: 1 }
    }
    const spyFunction = jest.spyOn(formOrder.methods, 'updateOrder')
    const wrapper = mount(formOrder, {
      mocks: {
        $route
      }
    })
    const orderForm = wrapper.find('#orderForm')
    await orderForm.trigger('submit')
    expect(spyFunction).toBeCalled()
  })

  it('Get a order', async () => {
    const $route = {
      params: { id: 1 }
    }
    const spyFunction = jest.spyOn(formOrder.methods, 'getOrder')
    mount(formOrder, {
      mocks: {
        $route
      }
    })
    expect(spyFunction).toBeCalled()
  })
})
