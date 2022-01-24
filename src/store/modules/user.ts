import { Module, VuexModule, Action, getModule } from 'vuex-module-decorators'
import { login } from '@/api/user'

@Module
export default class User extends VuexModule {
  /**
   * 用户登录
   */
  @Action
  public async login (userInfo: { username:string, password:string }): Promise<void> {
    console.log(userInfo)
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    return data
  }
}

export const UserModule = getModule(User)
