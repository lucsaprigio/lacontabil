import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User, UserProps } from '@/domain/lacontabil/entities/user'

/**
 * Factories -> Criação de uma nova pergunta nos testes
 *
 *
 * @param override
 * @returns answer
 */
export function makeUser(
    override: Partial<UserProps> = {},
    id?: UniqueEntityID,
) {
    // Partial -> Pega todas as props de uma Props, e torna como opcional
    const user = User.create({
        cpf_cnpj: '123456789',
        email: 'johndoe@example.com',
        name: 'John Doe',
        password: 'securePassword123',
        ...override
    },
        id,
    )

    return user
}
