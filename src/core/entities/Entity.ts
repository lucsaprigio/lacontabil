import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
    // Vamos passar um genereric como props para poder Passar as propriedades para a classe que extendendo esta classe
    private _id: UniqueEntityID
    protected props: Props

    get id() {
        return this._id;
    }

    protected constructor(props: Props, id?: UniqueEntityID) {
        this.props = props
        this._id = id ?? new UniqueEntityID()
    }
}