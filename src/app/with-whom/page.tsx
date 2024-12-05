import { user } from "@/module/user/service";
import Image from "next/image";

export default async function WithWhomPage() {
  const allMember = await user.getAllMember();
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-3 gap-4">
        {allMember.map((member) => {
          return (
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={member.image || ""}
                alt="member-image"
                width={150}
                height={150}
                className="rounded-full aspect-square object-cover size-36"
              />
              <div className="text-xl font-bold">{member.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
