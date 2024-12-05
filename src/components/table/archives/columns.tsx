"use client";

import { ArchivePostListProps } from "@/module/post/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight, Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<ArchivePostListProps>[] = [
  {
    accessorKey: "user",
    header: "작성자",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center w-fit">
          <Image
            src={row.original.user.image || ""}
            alt="user image"
            width={20}
            height={20}
            className="rounded-full size-9 aspect-square object-cover"
          />
          <div>{row.original.user.name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "week",
    header: "주차",
    cell: ({ row }) => {
      return <div>{row.original.curriculum.week.weekNumber}</div>;
    },
  },
  {
    accessorKey: "curriculum",
    header: "커리큘럼",
    cell: ({ row }) => {
      return (
        <div className="rounded-sm p-2 bg-secondary shrink-0 break-normal w-fit">
          {row.original.curriculum.name}
        </div>
      );
    },
  },
  {
    accessorKey: "comments",
    header: "댓글",
    cell: ({ row }) => {
      return <div>{row.original.comments.length}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "작성일",
    cell: ({ row }) => {
      return <div>{row.original.createdAt.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "_",
    header: "",
    cell: ({ row }) => {
      const detailPost = row.original.id;
      return (
        <Link href={`/archives/${detailPost}`}>
          <button className="rounded-sm size-10 flex justify-center items-center bg-primary">
            <ArrowRight />
          </button>
        </Link>
      );
    },
  },
];
