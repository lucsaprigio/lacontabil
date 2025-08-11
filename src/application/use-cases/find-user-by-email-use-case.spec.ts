import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { makeUser } from "test/factories/make-user";
import { AppError } from "@/core/shared/errors/AppError";
import { FindUserByEmailUseCase } from "./find-user-by-email-use-case";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: FindUserByEmailUseCase

describe('Find user by email', async () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new FindUserByEmailUseCase(inMemoryUsersRepository)
    })

    it('should be able to find user by email', async () => {
        const newUser = makeUser()

        inMemoryUsersRepository.create(newUser);

        const { user } = await sut.execute({ email: newUser.email.toString() })

        expect(user?.email).equals(newUser.email)
    })

    it('should be able to not found user', async () => {
        await expect(
            sut.execute({ email: 'wrong-mail' })
        ).rejects.toBeInstanceOf(AppError)
    })
})