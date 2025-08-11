import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { AppError } from "@/core/shared/errors/AppError";
import { User } from "@/domain/lacontabil/entities/user";

interface FindUserByEmailUseCaseRequest {
    email: string;
}

interface FindUserByEmailUseCaseResponse {
    user: User | null;
}

export class FindUserByEmailUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ email }: FindUserByEmailUseCaseRequest): Promise<Omit<FindUserByEmailUseCaseResponse, 'password'>> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User with same email not exist', 400)
        }

        return {
            user
        }
    }
}