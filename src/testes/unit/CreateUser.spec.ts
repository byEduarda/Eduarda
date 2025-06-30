
import { create } from 'domain';
import { CreatUser } from  '../cors'

describe('Criar usuário', () => {
    it('deve criar um novo usuario com id gerado', () => {
        const creatUser = new CreateUser();

        const user = createUser.execute({
            "name": "Dandara da Silva",
            "login": "dandara1995",
            "email": "dandara@example.com",
            "password": "123456"
        })

        expect(user).toHaveProperty('id')
        expect(user.name).toBe("Dandara da Silva")
        expect(user.email).toBe("dandara@example.com")
    })
})