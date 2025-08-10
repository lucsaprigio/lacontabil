import { InMemoryUsersRepository } from "test/repositories/in-memory-user-repository"
import { FindUserByIdUseCase } from "./find-user-by-id-use-case";
import { makeUser } from "test/factories/make-user";

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

        const { user } = await sut.execute({ id: newUser.id.toString() })

        expect(user?.id).equals(newUser.id)
    })

})