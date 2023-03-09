import { type User } from 'types/types'
import Api from './Api'

type LoginDataType = Omit<User, '_id' | 'name'>
type UpdateDataType = Omit<User, 'password' | 'isAunthorized'>

class UserService {
  private readonly api: Api

  constructor(private readonly url: string) {
    this.api = new Api(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  }

  public async register(data: User): Promise<User> {
    try {
      const newUser = await this.api.post<User>('signup', data)

      return newUser
    } catch (error: any) {
      return error
    }
  }

  public async login(data: LoginDataType): Promise<any> {
    const response = await this.api.post<any>('signin', data)
    return response
  }

  public async logout(): Promise<{ message: string }> {
    try {
      const message = await this.api.get<{ message: string }>('signout')

      return message
    } catch (error: any) {
      return error
    }
  }

  public async checkToken(): Promise<User> {
    try {
      const user = await this.api.get<User>('users/me')

      return user
    } catch (error: any) {
      return error
    }
  }

  public async updateUser(data: UpdateDataType): Promise<UpdateDataType> {
    try {
      const updatedUser = await this.api.patch('users/me', data)

      return updatedUser
    } catch (error: any) {
      return error
    }
  }
}

export default new UserService('http://localhost:5000')
