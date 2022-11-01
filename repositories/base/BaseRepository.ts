import { PrismaClient } from "@prisma/client";
import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  protected db: PrismaClient;
  protected table: string;
  readonly _collection: any;

  constructor(table: string) {
    this.db = new PrismaClient();
    this.table = table;
  }

  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
