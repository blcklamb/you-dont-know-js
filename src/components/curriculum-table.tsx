import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { HomeCurriculumTableProps } from "@/module/curriculum/type";

const partBadgeColor: Record<number, string> = {
  1: "bg-[#561D25]",
  2: "bg-[#CE8147]",
  3: "bg-[#28965A]",
  4: "bg-[#0081A7]",
};

export function CurriculumTable({
  data,
}: {
  data: HomeCurriculumTableProps[];
}) {
  return (
    <Table>
      <TableCaption>진행 상황에 따라 변동될 수 있습니다</TableCaption>
      <TableHeader>
        <TableRow className="font-bold">
          <TableHead className="md:w-[200px] w-auto">파트</TableHead>
          <TableHead>장</TableHead>
          <TableHead>주차</TableHead>
          <TableHead className="text-right">페이지</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((curriculum) => (
          <TableRow key={curriculum.id}>
            <TableCell
              className={cn(
                "font-medium text-white",
                partBadgeColor[curriculum.partId]
              )}
            >
              {curriculum.part.name}
            </TableCell>
            <TableCell className="font-bold text-center">
              {curriculum.name}
            </TableCell>
            <TableCell>{curriculum.week.weekNumber}주차</TableCell>
            <TableCell className="text-right">{curriculum.pages}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
