import { Entity } from "@/core/entities/Entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface UserProps {
    email: string;
    password: string;
    cpf_cnpj: string;
    name: string;
}

export class User extends Entity<UserProps> {
    get email(): string {
        return this.props.email
    }

    static create(props: UserProps, id?: UniqueEntityID) {
        const user = new User(props, id)

        return user
    }
}