import { Viewer } from "@/components/editor/viewer";
import { post } from "@/module/post/service";

export default async function ArchiveDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const singlePost = await post.getSinglePost(id);
  return (
    <div className="px-2">
      <div className="border border-secondary divide-y-2">
        <div className="flex divide-x-2 ">
          <div className="p-2 min-w-20">작성자</div>
          <div className="flex items-center p-2">{singlePost?.user.name}</div>
        </div>
        <div className="flex divide-x-2 min-w-20">
          <div className="p-2 min-w-20">파트</div>
          <div className="flex items-center p-2">
            <div className="rounded-sm p-2 bg-secondary font-bold">
              {singlePost?.curriculum.week.weekNumber}주차{" "}
              {singlePost?.curriculum.name}
            </div>
          </div>
        </div>
        <Viewer data={singlePost?.postRichText || ""}></Viewer>
        <div className="p-4">{}</div>
      </div>
    </div>
  );
}
