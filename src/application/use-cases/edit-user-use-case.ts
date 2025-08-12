import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { AppError } from "@/core/shared/errors/AppError";
import { User } from "@/domain/lacontabil/entities/user";

interface EditUserUseCaseRequest {
    userId: string;
    email: string;
    password: string;
    cpf_cnpj: string;
    name: string;
}

interface EditUserUseCaseResponse {
    user: User
}

export class EditUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ userId, cpf_cnpj, email, name, password }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
        const user = await this.usersRepository.findById(userId)

        if (!user) {
            throw new AppError('User not found', 400);
        }

        if (password === user.password) {
            throw new AppError('Pasword must not be the same previous one', 400)
        }

        if (email === user.email) {
            throw new AppError('Email must not be the same previous one', 400)
        }

        user.cpf_cnpj = cpf_cnpj
        user.password = password
        user.email = email
        user.name = name

        await this.usersRepository.save(user)

        return {
            user
        }
    }
}