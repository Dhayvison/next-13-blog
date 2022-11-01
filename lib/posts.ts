import { promises as fs } from "fs";
import path from "path";
import PostsRepository from "../repositories/PostsRepository";

const getPosts = async () => {
  const repository = new PostsRepository();
  const posts = repository.getAll();

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");

      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        date: document.data.date,
        markdown: document.content,
      };
    })
  );
};

export default getPosts;
