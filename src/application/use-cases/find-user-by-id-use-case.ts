import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { AppError } from "@/core/shared/errors/AppError";
import { User } from "@/domain/lacontabil/entities/user";

interface FindUSerByIdUseCaseRequest {
    id: string;
}

interface FindUSerByIdUseCaseResponse {
    user: User | null;
}

export class FindUserByIdUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ id }: FindUSerByIdUseCaseRequest): Promise<Omit<FindUSerByIdUseCaseResponse, 'password'>> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError('Question not found', 400)
        }

        return {
            user
        }
    }
}