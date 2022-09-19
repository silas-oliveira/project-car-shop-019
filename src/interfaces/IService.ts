export interface IService<T> {
  addCar(body: T): Promise<T | null>
  getAll(): Promise<T[] | null>
}
