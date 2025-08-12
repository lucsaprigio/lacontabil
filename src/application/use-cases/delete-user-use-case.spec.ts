import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { DeleteUserUseCase } from "./delete-user-use-case";
import { makeUser } from "test/factories/make-user";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { AppError } from "@/core/shared/errors/AppError";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: DeleteUserUseCase

describe('Delete user', async () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new DeleteUserUseCase(inMemoryUsersRepository)
    })

    it('should be able a delete user.', async () => {
        const newUser = makeUser({
            cpf_cnpj: '123456789',
            email: 'jonhdoe@example.com',
            name: 'John Doe',
            password: 'hash'
        },
            new UniqueEntityID('user-1')
        );

        await inMemoryUsersRepository.create(newUser)

        await sut.execute({ userId: newUser.userId.toString() })

        expect(inMemoryUsersRepository.items).toHaveLength(0)
    })

    it('should not be able a delete user.', async () => {
        const newUser = makeUser({
            cpf_cnpj: '123456789',
            email: 'jonhdoe@example.com',
            name: 'John Doe',
            password: 'hash'
        },
            new UniqueEntityID('user-1')
        );

        await inMemoryUsersRepository.create(newUser)

        await expect(() => {
            return sut.execute({
                userId: 'user-2'
            })
        }).rejects.toBeInstanceOf(AppError)
    })


})