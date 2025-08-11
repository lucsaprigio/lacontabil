import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { User } from "@/domain/lacontabil/entities/user";

interface CreateUserUseCaseRequest {
    email: string;
    password: string;
    cpf_cnpj: string;
    name: string;
}

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute({ cpf_cnpj, email, name, password }: CreateUserUseCaseRequest) {
        const user = User.create({
            cpf_cnpj, email, name, password
        })

        await this.usersRepository.create(user);

        return {
            user
        }
    }
}