import { Entity } from "@/core/entities/Entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

export interface UserProps {
    userId: UniqueEntityID;
    email: string;
    password: string;
    cpf_cnpj: string;
    name: string;
    createdAt: Date
    updatedAt?: Date
}

export class User extends Entity<UserProps> {
    get userId() {
        return this.props.userId
    }

    get email(): string {
        return this.props.email
    }

    get cpf_cnpj(): string {
        return this.props.cpf_cnpj
    }

    get name(): string {
        return this.props.name
    }

    get password(): string {
        return this.props.password
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    private touch() {
        this.props.updatedAt = new Date()
    }

    set email(email: string) {
        this.props.email = email
        this.touch()
    }

    set cpf_cnpj(cpf_cnpj: string) {
        this.props.cpf_cnpj = cpf_cnpj
        this.touch()
    }

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    set password(password: string) {
        this.props.password = password
        this.touch()
    }

    static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityID) {
        const user = new User({
            ...props,
            createdAt: props.createdAt ?? new Date()
        },
            id,
        )

        return user
    }
}