import db from "../db";
import { ARCHIVE_POST } from "./type";

class Post {
  async getAllPosts() {
    return db.post.findMany({
      include: ARCHIVE_POST,
    });
  }
  async getSinglePost(id: string) {
    return db.post.findUnique({
      where: { id },
      include: ARCHIVE_POST,
    });
  }
}

export const post = new Post();
