import { columns } from "@/components/curriculums/columns";
import { DataTable } from "@/components/curriculums/data-table";
import { Button } from "@/components/ui/button";
import { curriculum } from "@/module/curriculum/service";
import Image from "next/image";

export default async function Home() {
  const data = await curriculum.getAllCurriculum();
  return (
    <div className="flex flex-col gap-4 items-center py-6">
      <section className="flex flex-col gap-4 w-full ">
        <div className="flex justify-around py-4">
          <a
            target="_blank"
            href="https://www.yes24.com/Product/UsedShopHub/Hub/43219481"
            rel="noopener noreferrer"
          >
            <Image
              src={"https://image.yes24.com/Goods/43219481/XL"}
              alt="you dont know js I"
              width={200}
              height={200}
              className="aspect-auto w-[180px] hover:scale-105 transition-all transform ease-in-out"
            />
          </a>
          <a
            target="_blank"
            href="https://www.yes24.com/Product/UsedShopHub/Hub/44132601"
            rel="noopener noreferrer"
          >
            <Image
              src={"https://image.yes24.com/Goods/44132601/XL"}
              alt="you dont know js I"
              width={200}
              height={200}
              className="aspect-auto w-[180px] hover:scale-105 transition-all transform ease-in-out"
            />
          </a>
        </div>
        <div className="flex flex-col gap-4 px-4 ">
          <div className="text-2xl font-bold">Curriculum</div>
          <DataTable data={data} columns={columns} />
        </div>
        <div className="flex flex-col gap-4 px-4 py-8">
          <div className="text-2xl font-bold">ground rules</div>
          <div className="bg-secondary rounded-lg p-6">
            <ul className="list-disc py-2 gap-2 flex flex-col">
              <li>매주 월요일 22시에 모여요.</li>
              <li>
                모임 전까지마다{" "}
                <b>
                  각자 공부한 것을 바탕으로 정리한 것을 공유해요.(어떤 형태든
                  괜찮아요)
                </b>
              </li>
              <li>모임 때는 참여자 중 랜덤으로 발표자 2인을 선정해요.</li>
              <li>
                선정된 발표자는 주차 분량 내에서{" "}
                <b>[새롭게 알게된 점/더 알아본 점/궁금한 점]</b>을 공유해요.
              </li>
            </ul>
          </div>
        </div>
        <Button className="max-w-[300px] font-bold text-xl mx-auto my-2">
          참여 신청하기
        </Button>
        <div className="bg-secondary p-4 flex justify-center font-bold">
          궁금한 점은 스터디 공고 스레드에 남겨주세요!
        </div>
      </section>
    </div>
  );
}
