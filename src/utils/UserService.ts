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
    const newUser = await this.api.post<User>('signup', data)

    return newUser
  }

  public async login(data: LoginDataType): Promise<any> {
    const response = await this.api.post<any>('signin', data)
    return response
  }

  public async logout(): Promise<{ message: string }> {
    const message = await this.api.get<{ message: string }>('signout')

    return message
  }

  public async checkToken(): Promise<User> {
    const user = await this.api.get<User>('users/me')
    return user
  }

  public async updateUser(data: UpdateDataType): Promise<UpdateDataType> {
    const updatedUser = await this.api.patch('users/me', data)

    return updatedUser
  }
}

export default new UserService('https://api.moviesapp.nomoredomains.work')
