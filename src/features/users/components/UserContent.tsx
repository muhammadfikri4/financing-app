import { Badges } from "@features/_global/components/Badges";
import { MasterTable } from "@features/_global/components/MasterTable";
import { Poppins } from "@features/_global/components/Text/Poppins";
import { useUser } from "../hooks/useUser";

export const UserContent = () => {
  const { data: users } = useUser();

  return (
    <>
      <MasterTable
        data={users?.data?.map((item) => ({
          ...item,
          id: item.id,
        }))}
        withAction={false}
        title={["Name", "Email", "Role", "Department", "Status"]}
        columnTable={[
          {
            return: ({ name }) => <Poppins className="text-sm">{name}</Poppins>,
          },
          {
            return: ({ email }) => (
              <Poppins className="text-sm">{email}</Poppins>
            ),
          },
          {
            return: ({ role }) => <Poppins className="text-sm">{role}</Poppins>,
          },
          {
            return: ({ department }) => (
              <Poppins className="text-sm">{department?.name ?? "-"}</Poppins>
            ),
          },
          {
            return: ({ isActive }) => (
              <Badges
                text={isActive ? "Active" : "Inactive"}
                variant={isActive ? "primary" : "danger"}
              />
            ),
          },
        ]}
      />
    </>
  );
};
