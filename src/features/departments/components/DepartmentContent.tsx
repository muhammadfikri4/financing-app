import { Badges } from "@features/_global/components/Badges";
import { MasterTable } from "@features/_global/components/MasterTable";
import { Poppins } from "@features/_global/components/Text/Poppins";
import { useDepartment } from "../hooks/useDepartment";
import { DateYearPicker } from "@features/_global/components/Date";

export const DepartmentContent = () => {
  const { data: department, isLoading } = useDepartment();

  return (
    <div className="flex flex-col gap-2">
      <div className="w-64">
        <DateYearPicker
          onChange={(e) => console.log(e, "date")}
          value={new Date("2015")}
        />
      </div>
      <MasterTable
        data={department?.data?.map((item) => ({
          ...item,
          id: item.id,
        }))}
        title={["Name", "Status"]}
        isLoading={isLoading}
        columnTable={[
          {
            return: ({ name }) => <Poppins className="text-sm">{name}</Poppins>,
          },
          {
            return: ({ isActive }) => (
              <Badges
                text={isActive ? "Active" : "Inactive"}
                variant={isActive ? "success" : "danger"}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
