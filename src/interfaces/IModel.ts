export interface IModel<T> {
  create(body: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  update?(id: string, body: T): Promise<T | null>;
  delete?(id: string): Promise<T | null>;
}