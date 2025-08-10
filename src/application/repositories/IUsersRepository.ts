import { User } from "@/domain/lacontabil/entities/user";

export interface IUsersRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<void>;
    delete(user: User): Promise<void>;
}