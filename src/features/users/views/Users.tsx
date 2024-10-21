import { PageLayout } from "@features/global/components/PageLayout";
import { Poppins } from "@features/global/components/Text/Poppins";
import { useUser } from "../hooks/useUser";
import { Badges } from "@features/global/components/Badges";

export const UsersViews = () => {
  const { data: users } = useUser();
  return (
    <PageLayout title="Users">
      <div className="border border-solid border-[#8a8a8a] py-1 rounded-md bg-gray-50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-solid border-black">
              <th className="p-4 text-left">
                <Poppins>Name</Poppins>
              </th>
              <th className="p-4 text-left">
                <Poppins>Email</Poppins>
              </th>
              <th className="p-4 text-left">
                <Poppins>Role</Poppins>
              </th>
              <th className="p-4 text-left">
                <Poppins>Department</Poppins>
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
            {users?.data?.map((item, index) => (
              <tr
                className={`${
                  index === (users?.data?.length as number) - 1
                    ? ""
                    : "border-b border-solid border-black"
                }`}
              >
                <td className="p-4 bg-gray-100 text-left">
                  <Poppins className="text-sm">{item.name}</Poppins>
                </td>
                <td className="p-4 bg-gray-100 text-left">
                  <p className="font-poppins text-sm">
                    <Poppins className="text-sm">{item.email}</Poppins>
                  </p>
                </td>
                <td className="p-4 bg-gray-100 text-left">
                  <Poppins className="text-sm">{item.role}</Poppins>
                  <p className="font-poppins text-sm"></p>
                </td>
                <td className="p-4 bg-gray-100 text-left">
                  <Poppins className="text-sm">{item.department?.name ?? '-'}</Poppins>
                </td>
                <td className="p-4 bg-gray-100 text-left">
                  <Badges text={item.isActive ? "Active" : "Inactive"} 
                  variant={item.isActive ? "primary" : "danger"}
                  />
                </td>
                <td className="p-4 bg-gray-100 text-left"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
};
