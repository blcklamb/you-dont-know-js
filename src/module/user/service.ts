import db from "../db";

class User {
  async getAllMember() {
    return db.user.findMany({
      where: {
        OR: [
          {
            role: "MEMBER",
          },
        ],
      },
    });
  }
}

export const user = new User();
