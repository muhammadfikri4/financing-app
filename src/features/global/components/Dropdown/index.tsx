import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ListItem {
  label: string;
  value: string;
}

interface IDropdownProps {
  list: ListItem[];
  placeholder?: string;
  defaultValue?: ListItem;
  onChange?: (e:ListItem) => void
}

const initValue: ListItem = {
  label: "",
  value: "",
};

export const Dropdown: React.FC<IDropdownProps> = ({
  list,
  placeholder,
  defaultValue,
  onChange
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(defaultValue || initValue);
  return (
    <div className="w-full relative">
      <div
        onClick={() => setShow((prev) => !prev)}
        className="border border-solid border-gray-300 w-full rounded-lg flex items-center justify-between px-4 py-3 cursor-pointer"
      >
        <p className={`text-sm font-poppins font-medium duration-200 ${!selected.label && placeholder ? 'opacity-50' : ''}`}>
          {defaultValue?.label || selected.label || placeholder || ""}
        </p>
        <MdKeyboardArrowDown className="text-2xl text-gray-500" />
      </div>
      {show && (
        <div className="relative">
          <div className="absolute overflow-auto max-h-52 flex flex-col gap-1 w-full  bg-white border border-solid border-gray-300 rounded-lg mt-2 py-2 px-2">
           {list?.map(item => (
             <div
             onClick={() => {
               setShow((prev) => !prev);
               setSelected(item);
               onChange?.(item)

             }}
             className="w-full rounded-lg flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100"
           >
             <p className="text-sm font-poppins">{item.label}</p>
           </div>
           ))}
          </div>
        </div>
      )}
    </div>
  );
};
