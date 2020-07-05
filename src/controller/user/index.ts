import User from '../../model/user'
import { Request, Response } from 'express'

class UserController {
    async createUser(request: Request, response: Response) {
        const { name, login, pass } = request.body
        const user = new User(name, login, pass)
        const createduser = await user.create()
        return response.status(201).json(createduser);   
    }

    async listUsers(request: Request, response: Response){
        const user = new User()
        const listedUsers = await user.index()
        return response.json(listedUsers);          
    }
}

export default UserController