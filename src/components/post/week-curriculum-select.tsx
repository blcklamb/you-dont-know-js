import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurriculumSelect } from "@/module/curriculum/type";

export function WeekCurriculumSelect({ data }: { data: CurriculumSelect }) {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="커리큘럼을 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(data).map(([key, value]) => {
          return (
            <SelectGroup key={key}>
              <SelectLabel>{key}주차</SelectLabel>
              {value.map((singleCurriculum) => {
                return (
                  <SelectItem
                    key={singleCurriculum.id}
                    value={String(singleCurriculum.id)}
                  >
                    {singleCurriculum.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          );
        })}
      </SelectContent>
    </Select>
  );
}
