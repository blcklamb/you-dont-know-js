import { columns } from "@/components/table/archives/columns";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { post } from "@/module/post/service";

export default async function ArchivesPage() {
  const data = await post.getAllPosts();

  return (
    <div className="flex flex-col gap-2 px-4">
      <Button className="w-fit">기록 작성하기</Button>
      <div>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
