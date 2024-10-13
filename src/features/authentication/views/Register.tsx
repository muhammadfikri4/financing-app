import { FormRegister } from "../components/FormRegister";

export const RegisterViews = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <h1 className="font-bold text-4xl font-poppins">Sign Up</h1>
      </div>
      <FormRegister />
    </div>
  );
};
