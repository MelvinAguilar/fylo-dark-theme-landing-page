import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import InputField from "../components/InputField";
import MotionComponent from "../components/MotionComponent";
import { zoomInVariants } from "../utils/motion";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    reset();
  };

  return (
    <MotionComponent
      as="div"
      variants={zoomInVariants(0.5, 0.8)}
      className="absolute-form shadow-d | w-11/12 max-w-[53.9375rem] rounded-lg bg-dark-form p-8 text-center md:px-[4.8125rem] md:pt-[3.0625rem] md:pb-[2.625rem]"
    >
      <h2 className="font-raleway text-clamp-18-32 font-bold">
        Get early access today
      </h2>
      <p className="mx-auto mt-4 max-w-[85ch]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <div className="mt-[2.375rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[1.875rem] md:flex-row">
            <InputField
              id="mail"
              className="text-dark-form"
              nameGroup="mail"
              placeholder="email@example.com"
              label="Input your email"
              innerRef={{
                ...register("mail", {
                  required: {
                    value: true,
                    message: "Please add an email",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                }),
              }}
              validation={errors.mail}
              aria-invalid={errors.mail ? "true" : "false"}
              aria-describedby={errors.mail ? "mail-error" : null}
            >
              <div
                aria-live="polite"
                aria-atomic="true"
                className="relative w-full"
              >
                {errors.mail?.type === "required" && (
                  <ErrorMessage>{errors.mail.message}</ErrorMessage>
                )}
                {errors.mail?.type === "pattern" && (
                  <ErrorMessage>{errors.mail.message}</ErrorMessage>
                )}
              </div>
            </InputField>
            <MotionComponent
              as="button"
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient block rounded-full px-[1.8125rem] py-[0.9375rem] font-bold leading-[1.1875rem] hover:bg-cyan"
            >
              Get Started For Free
            </MotionComponent>
          </div>
        </form>
      </div>
    </MotionComponent>
  );
};

export default Form;
