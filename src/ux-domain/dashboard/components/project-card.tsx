import { useAtom } from "jotai";
import Link from "next/link";

import { selectEventIDAtom } from "@/domain/event/store/atom";

export type ProjectCardProps = {
  name: string;
  id: string;
};

export const ProjectCard = ({ name, id }: ProjectCardProps) => {
  const setSelectEventID = useAtom(selectEventIDAtom)[1];

  return (
    <div className={"h-24 w-64 rounded-lg border-2 border-gray bg-white p-4"}>
      <Link
        href={`/event/${id}/general`}
        onClick={() => setSelectEventID(id)}
        className={"hover:text-deepBlue"}
      >
        {name}
      </Link>
    </div>
  );
};
