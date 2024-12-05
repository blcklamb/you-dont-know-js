import { CreatePostButton } from "@/components/post/create-post-button";
import Tiptap from "@/components/editor/tiptap";
import { WeekCurriculumSelect } from "@/components/post/week-curriculum-select";
import { curriculum } from "@/module/curriculum/service";

export default async function CreatePostPage() {
  const allCurriculums = await curriculum.groupAllCurriculum();
  return (
    <div className="px-4 flex flex-col gap-4">
      <WeekCurriculumSelect data={allCurriculums} />
      <Tiptap />
      <div>
        <CreatePostButton />
      </div>
    </div>
  );
}
