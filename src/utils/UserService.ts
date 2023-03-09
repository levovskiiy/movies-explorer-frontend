import { type IUser } from 'types/types'
import Api from './Api'

type LoginDataType = Omit<IUser, '_id' | 'name'>
type UpdateDataType = LoginDataType

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

  public async register(data: IUser): Promise<IUser> {
    try {
      const newUser = await this.api.post<IUser>('signup', data)

      return newUser
    } catch (error: any) {
      return error
    }
  }

  public async login(data: LoginDataType): Promise<boolean> {
    try {
      await this.api.post<LoginDataType>('signin', data)

      return true
    } catch (error: any) {
      return error
    }
  }

  public async logout(): Promise<{ message: string }> {
    try {
      const message = await this.api.get<{ message: string }>('signout')

      return message
    } catch (error: any) {
      return error
    }
  }

  public async checkToken(): Promise<IUser> {
    try {
      const user = await this.api.get<IUser>('users/me')

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
