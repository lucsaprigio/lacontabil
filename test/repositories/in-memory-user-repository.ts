import { IUsersRepository } from "@/application/repositories/IUsersRepository";
import { User } from "@/domain/lacontabil/entities/user";

export class InMemoryUsersRepository implements IUsersRepository {
    public items: User[] = []

    async create(user: User): Promise<void> {
        this.items.push(user)
    }

    async findById(userId: string) {
        const user = this.items.find((item) => item.userId.toString() === userId);

        if (!user) {
            return null
        }

        return user
    }

    async findByEmail(email: string) {
        const user = this.items.find((item) => item.email === email)

        if (!user) {
            return null
        }

        return user;
    }

    async delete(user: User) {
        const itemIndex = this.items.findIndex((item) => item.id === user.id)

        this.items.splice(itemIndex, 1)
    }

    async save(user: User) {
        const itemIndex = this.items.findIndex((item) => item.id === user.id)

        this.items[itemIndex] = user
    }
}