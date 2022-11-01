import { Post } from "@prisma/client";
import { BaseRepository } from "./base/BaseRepository";

export default class PostRepository extends BaseRepository<Post> {
  constructor() {
    super("posts");
  }
}
