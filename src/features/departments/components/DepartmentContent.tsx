import { Badges } from "@features/global/components/Badges";
import { Poppins } from "@features/global/components/Text/Poppins";
import { useDepartment } from "../hooks/useDepartment";

export const DepartmentContent = () => {
  const { data: department } = useDepartment();

  return (
    <div className="border border-solid border-[#8a8a8a] py-1 rounded-md bg-gray-50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-solid border-black">
            <th className="p-4 text-left">
              <Poppins>Name</Poppins>
            </th>
            <th className="p-4 text-left">
              <Poppins>Status</Poppins>
            </th>
            <th className="p-4 text-left">
              <Poppins>Action</Poppins>
            </th>
          </tr>
        </thead>
        <tbody>
          {department?.data?.map((item, index) => (
            <tr
              className={`${
                index === (department?.data?.length as number) - 1
                  ? ""
                  : "border-b border-solid border-black"
              }`}
            >
              <td className="p-4 bg-gray-100 text-left">
                <Poppins className="text-sm">{item.name}</Poppins>
              </td>
              <td className="p-4 bg-gray-100 text-left">
                <p className="font-poppins text-sm">
                  <Badges
                    text={item.isActive ? "Active" : "Inactive"}
                    variant={item.isActive ? "primary" : "danger"}
                  />
                </p>
              </td>
              <td className="p-4 bg-gray-100 text-left"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
