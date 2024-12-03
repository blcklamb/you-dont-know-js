export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center py-6 px-5">
      <div className="font-extrabold text-4xl py-4">{`You don't know JS`}</div>
      <section className="">
        <div className="text-xl font-bold">ground rules</div>
        <ul className="list-disc py-2 gap-2 flex flex-col">
          <li>매주 월요일 22시 에 모여요.</li>
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
      </section>
    </div>
  );
}
