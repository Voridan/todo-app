export interface IModelMapper<D, E> {
  toDomain(entity: E): D;
  toEntity(domain: D): E;
}
