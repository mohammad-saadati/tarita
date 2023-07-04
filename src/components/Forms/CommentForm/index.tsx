import { FC } from "react";
import { useForm } from "react-hook-form";

type CommentFormProps = {};

const CommentForm: FC<CommentFormProps> = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { comment: "" } });

  console.log("errors ", errors);

  const formHandler = (data: formData) => {
    console.log("data", data);
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(formHandler)}>
        {/* {renderCount} */}
        <div className="relative">
          <textarea
            {...register("comment", {
              required: "لطفا نظر خود را وارد کنید.",
              minLength: {
                value: 10,
                message: "متن نظر باید حداقل 10 کاراکتر باشد.",
              },
            })}
            placeholder="نظر خود را بنویسید"
            className="bg-[#F2F2F2] w-full resize-none h-32 p-4 rounded-[10px]"
          />
          <div className="absolute text-xs text-red-900">
            {errors.comment?.message}
          </div>
        </div>
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
