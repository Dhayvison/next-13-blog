import { Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { savePost } from "../../../lib/posts";

type Data = {
  status: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { title, content } = JSON.parse(req.body);
  const result = await savePost({ title, content } as Post);

  res.status(200).json({ status: result });
}
