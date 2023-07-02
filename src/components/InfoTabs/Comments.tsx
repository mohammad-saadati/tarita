import { FC } from "react";
import Image from "next/image";
import like from "@/assets/images/like.svg";
import dislike from "@/assets/images/dislike.svg";

type CommentsProps = {
  comments: {
    writer: string;
    date: string;
    text: string;
    likes: number;
    dislikes: number;
  }[];
};

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((item, index) => (
        <div className="flex flex-col border-b border-[#F2F2F2] pb-4 mb-4">
          <div className="text-sm font-medium">{item.writer}</div>
          <div className="text-xs text-[#828282] mb-3.5">{item.date}</div>
          <div className="text-sm">{item.text}</div>
          <div className="flex items-center justify-end mt-12">
            <div className="flex items-center mr-12">
              <span className="">{item.likes}</span>
              <Image
                className="cursor-pointer"
                src={like}
                alt=""
                width="24"
                height="24"
              />
            </div>
            <div className="flex items-center mr-12">
              <span className="">{item.dislikes}</span>
              <Image
                className="cursor-pointer"
                src={dislike}
                alt=""
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
