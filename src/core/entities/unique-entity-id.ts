import { randomUUID } from 'node:crypto'

/**
 * Classe que irá ser o ID das Entidades
 *
 * @param value {string} - Valor do ID
 * @method toString
 * @method toValue
 */

export class UniqueEntityID {
    private value: string

    public toString() {
        return this.value
    }

    public toValue() {
        return this.value
    }

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }
}
