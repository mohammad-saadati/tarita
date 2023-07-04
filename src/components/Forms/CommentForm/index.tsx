import { FC } from "react";
import { useForm } from "react-hook-form";

type CommentFormProps = {};

const CommentForm: FC<CommentFormProps> = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { comment: "" } });

  return (
    <div className="">
      <form className="">
        <textarea
          placeholder="نظر خود را بنویسید"
          className="bg-[#F2F2F2] w-full resize-none h-32 p-4 rounded-[10px]"
          cols="20"
        />
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="w-[150px] h-[48px] bg-[#333] text-white rounded-[10px]"
          >
            ارسال نظر
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
