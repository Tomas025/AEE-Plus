import { SubmitHandler, useForm } from "react-hook-form";

export function useModalAddBoard() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const imageFile = watch("imagem");
  const audioFile = watch("audio");

  console.log("Image File:", imageFile);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm: SubmitHandler<any> = async (data) => {
    console.log("Form submitted with data:", data);
  };

  return {
    register,
    reset,
    imageFile,
    audioFile,
    handleSubmit,
    isSubmitting,
    submitForm,
  };
}
