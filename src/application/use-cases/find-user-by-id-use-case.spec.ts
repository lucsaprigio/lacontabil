import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { FindUserByIdUseCase } from "./find-user-by-id-use-case";
import { makeUser } from "test/factories/make-user";
import { AppError } from "@/core/shared/errors/AppError";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: FindUserByIdUseCase

describe('Find user by id', async () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new FindUserByIdUseCase(inMemoryUsersRepository)
    })

    it('should be able to find user by id', async () => {
        const newUser = makeUser()

        inMemoryUsersRepository.create(newUser);

        const { user } = await sut.execute({ id: newUser.userId.toString() })

        expect(user?.id).equals(newUser.id)
    })

    it('should return null if user does not exist', async () => {
        await expect(
            sut.execute({ id: 'no-id' })
        ).rejects.toBeInstanceOf(AppError)
    })
})