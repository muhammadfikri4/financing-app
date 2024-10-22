import { Badges } from "@features/_global/components/Badges";
import { MasterTable } from "@features/_global/components/MasterTable";
import { Poppins } from "@features/_global/components/Text/Poppins";
import { useDepartment } from "../hooks/useDepartment";

export const DepartmentContent = () => {
  const { data: department } = useDepartment();

  return (
    <>
      <MasterTable
        data={department?.data?.map((item) => ({
          ...item,
          id: item.id,
        }))}
        title={["Name", "Status"]}
        columnTable={[
          {
            return: ({ name }) => <Poppins className="text-sm">{name}</Poppins>,
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
