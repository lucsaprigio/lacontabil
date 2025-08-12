import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { EditUserUseCase } from "./edit-user-use-case";
import { makeUser } from "test/factories/make-user";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: EditUserUseCase

describe('Edit user', async () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new EditUserUseCase(inMemoryUsersRepository)
    })

    it('should be able a edit user', async () => {
        const newUser = makeUser({
            userId: new UniqueEntityID('user-1')
        })

        const user = await inMemoryUsersRepository.create(newUser)

        console.log(user, newUser)

        await sut.execute({
            userId: newUser.userId.toValue(),
            cpf_cnpj: '0987654321',
            email: 'johndoe2@example.com',
            name: 'John Doe 2',
            password: 'hashpassword2'
        })

        expect(inMemoryUsersRepository.items[0]).toMatchObject({
            cpf_cnpj: '0987654321',
            email: 'johndoe2@example.com',
            name: 'John Doe 2',
            password: 'hashpassword2'
        })

    })
})