import { Prisma } from "@prisma/client";

export const ARCHIVE_POST = Prisma.validator<Prisma.PostInclude>()({
  curriculum: {
    select: {
      name: true,
      week: {
        select: {
          weekNumber: true,
        },
      },
    },
  },

  user: true,
  comments: true,
});

export type ArchivePostListProps = Prisma.PostGetPayload<{
  include: typeof ARCHIVE_POST;
}>;

export type SinglePostProps = Prisma.PostGetPayload<{
  include: typeof ARCHIVE_POST;
}>;
