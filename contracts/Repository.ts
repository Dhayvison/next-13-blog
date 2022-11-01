export default interface Repository<T> {
  get(id: number): T;
  getAll(): T[];
  save(entity: T): boolean;
  update(entity: T): boolean;
  delete(id: number): boolean;
}
