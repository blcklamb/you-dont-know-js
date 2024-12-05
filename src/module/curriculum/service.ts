import { CurriculumSelect, HOME_CURRICULUM } from "./type";
import db from "../db";

class Curriculum {
  async getAllCurriculum() {
    return db.curriculum.findMany({
      include: HOME_CURRICULUM,
    });
  }

  async groupAllCurriculum() {
    const data = await db.curriculum.groupBy({
      by: ["weekId", "name", "id"],
      orderBy: {
        weekId: "asc",
      },
    });

    const groupedData: CurriculumSelect = data.reduce((acc, curr) => {
      if (!acc[curr.weekId]) {
        acc[curr.weekId] = [];
      }
      acc[curr.weekId].push({ id: curr.id, name: curr.name });
      return acc;
    }, {} as CurriculumSelect);

    return groupedData;
  }
}

export const curriculum = new Curriculum();
