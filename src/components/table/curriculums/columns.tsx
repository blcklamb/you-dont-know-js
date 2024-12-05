"use client";

import { HomeCurriculumTableProps } from "@/module/curriculum/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<HomeCurriculumTableProps>[] = [
  {
    accessorKey: "part.name",
    header: "파트",
  },
  {
    accessorKey: "name",
    header: "장",
  },
  {
    accessorKey: "weekId",
    header: "주차",
  },
  {
    accessorKey: "pages",
    header: "페이지",
  },
];
