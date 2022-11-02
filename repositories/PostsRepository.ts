import { Post } from "@prisma/client";
import { BaseRepository } from "./base/BaseRepository";

export default class PostRepository extends BaseRepository<Post> {
  constructor() {
    super("posts");
  }

  async find(item?: Post | undefined): Promise<Post[]> {
    return await this.db.post.findMany();
  }

  async findOne(id: string): Promise<Post> {
    return await this.db.post.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });
  }
}
