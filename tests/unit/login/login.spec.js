import { mount } from '@vue/test-utils'
import login from '@/modules/login/components/card.vue'

describe('orders/formOrder.vue', () => {
  it('Execute login', async () => {
    const spyFunction = jest.spyOn(login.methods, 'login')
    const wrapper = mount(login, {
      propsData: {
        usuario: {
          email: 'olivier@mail.com',
          password: 'bestPassw0rd'
        }
      }
    })
    const loginForm = wrapper.find('#loginForm')
    await loginForm.trigger('submit')
    expect(spyFunction).toBeCalled()
  })
})
