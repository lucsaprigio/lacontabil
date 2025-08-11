import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { AppError } from "@/core/shared/errors/AppError";

interface DeleteUserUseCaseRequest {
    id: string;
}

export class DeleteUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ id }: DeleteUserUseCaseRequest) {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError('User not found', 400)
        }

        if (id !== user.id.toString()) {
            throw new AppError('Not allowed', 400)
        }

        await this.usersRepository.delete(user)

        return {}
    }
}