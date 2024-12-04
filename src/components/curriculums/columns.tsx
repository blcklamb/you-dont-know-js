"use client";

import { HomeCurriculumTableProps } from "@/module/curriculum/type";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

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
