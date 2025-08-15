import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { CreateUserUseCase } from "./create-user-use-case";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase

describe('Create user', async () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new CreateUserUseCase(inMemoryUsersRepository)
    })

    it('should be able a create user', async () => {

        const { user } = await sut.execute({
            userId: 'user-1',
            cpf_cnpj: '1234567890',
            email: 'johndoe@example.com',
            name: 'John Doe',
            password: 'hashpassword'
        })

        expect(user.id).toBeTruthy()
        expect(inMemoryUsersRepository.items[0].id).toEqual(user.id)
    })
})