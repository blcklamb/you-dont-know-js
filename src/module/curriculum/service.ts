import { HOME_CURRICULUM } from "./type";
import db from "../db";

class Curriculum {
  async getAllCurriculum() {
    const data = db.curriculum.findMany({
      include: HOME_CURRICULUM,
    });

    return data;
  }
}

export const curriculum = new Curriculum();
