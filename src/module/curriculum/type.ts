import { Prisma } from "@prisma/client";

export const HOME_CURRICULUM = Prisma.validator<Prisma.CurriculumInclude>()({
  part: {
    select: {
      name: true,
    },
  },
  week: {
    select: {
      weekNumber: true,
    },
  },
});

export type HomeCurriculumTableProps = Prisma.CurriculumGetPayload<{
  include: typeof HOME_CURRICULUM;
}>;
