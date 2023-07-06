import { FC } from "react";
import CommentForm from "@/components/Forms/CommentForm";

type QandAProps = {
  questions: {
    writer: string;
    date: string;
    text: string;
    repliesCount: number;
    replies: { writer: string; date: string; text: string }[];
  }[];
};

const QandA: FC<QandAProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((item, index) => (
        <div
          className="flex flex-col border-b border-[#F2F2F2] pb-4 mb-4"
          key={index}
        >
          <div className="text-sm font-medium">{item.writer}</div>
          <div className="text-xs text-[#828282] mb-3.5">{item.date}</div>
          <div className="text-sm">{item.text}</div>
          <div className="flex items-center justify-end mt-12">
            <div className="flex items-center mr-12 text-sm">
              <span className="ml-2">{item.repliesCount}</span>
              <span>پاسخ</span>
            </div>
          </div>
          {item.replies.map((rep, indx) => (
            <div
              className="flex flex-col pb-4 mb-4 mr-10"
              key={indx}
            >
              <div className="text-sm font-medium">{rep.writer}</div>
              <div className="text-xs text-[#828282] mb-3.5">{rep.date}</div>
              <div className="text-sm">{rep.text}</div>
            </div>
          ))}
        </div>
      ))}
      <CommentForm />
    </div>
  );
};

export default QandA;
