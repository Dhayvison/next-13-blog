import { Post } from "@prisma/client";
import PostsRepository from "../repositories/PostsRepository";

export const getPosts = async () => {
  const repository = new PostsRepository();
  return await repository.find();
};

export const getPost = async (id: string) => {
  const repository = new PostsRepository();
  return await repository.findOne(id);
};

export const savePost = async (post: Post) => {
  const repository = new PostsRepository();
  return await repository.create(post);
};
