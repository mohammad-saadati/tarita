import Image from "next/image";
import { FC } from "react";
import avatar from "@/assets/images/avatar.svg";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="border rounded">
      <Image
        src={avatar}
        width={90}
        height={90}
        className="rounded"
        alt="avatar"
      />
    </div>
  );
};

export default Sidebar;
