import { describe, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import Login from '@/infrastructure/components/login.vue'

const mountLogin = (): VueWrapper => {
  return mount(Login, { })
}

describe('Components login.vue', () => {
  test('should mount the component', async () => {
    const wrapper = mountLogin()
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.text()).toContain('Login')
  })

  test('should emit the event save with itens object', async () => {
    const wrapper = mountLogin()
    await wrapper.get('#save').trigger('click')

    expect(wrapper.emitted().login).toBeTruthy()
    expect(wrapper.emitted().login.length).toBe(1)
    expect(wrapper.emitted().login[0]).toEqual([{}])
  })
})
