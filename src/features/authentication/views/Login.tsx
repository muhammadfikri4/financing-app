import { FormLogin } from "../components/FormLogin";

export const LoginViews = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <h1 className="font-bold text-4xl font-poppins">Sign In</h1>
      </div>
      <FormLogin/>
    </div>
  );
};
