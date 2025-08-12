import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { AppError } from "@/core/shared/errors/AppError";

interface DeleteUserUseCaseRequest {
    userId: string;
}

export class DeleteUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ userId }: DeleteUserUseCaseRequest) {
        const user = await this.usersRepository.findById(userId);

        if (!user) {
            throw new AppError('User not found', 400)
        }

        if (userId !== user.userId.toString()) {
            throw new AppError('Not allowed', 400)
        }

        await this.usersRepository.delete(user)

        return {}
    }
}