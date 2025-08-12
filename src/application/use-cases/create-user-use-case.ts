import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { User } from "@/domain/lacontabil/entities/user";

interface CreateUserUseCaseRequest {
    userId: string;
    email: string;
    password: string;
    cpf_cnpj: string;
    name: string;
}

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ userId, cpf_cnpj, email, name, password }: CreateUserUseCaseRequest) {
        const user = User.create({
            userId: new UniqueEntityID(userId),
            cpf_cnpj,
            email,
            name,
            password
        })

        await this.usersRepository.create(user);

        return {
            user
        }
    }
}