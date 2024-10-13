import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import { Input } from "../Input";

interface ListItem {
  label: string;
  value: string;
}

interface IDropdownProps {
  list: ListItem[];
  placeholder?: string;
  defaultValue?: ListItem;
  searchInput?: boolean;
  onSearch?: (e: string) => void;
  onChange?: (e: ListItem) => void;
}

const initValue: ListItem = {
  label: "",
  value: "",
};

export const Dropdown: React.FC<IDropdownProps> = ({
  list,
  placeholder,
  defaultValue,
  onChange,
  searchInput = false,
  onSearch,
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(defaultValue || initValue);

  return (
    <div className="w-full relative">
      <div
        onClick={() => setShow((prev) => !prev)}
        className="border border-solid border-gray-300 w-full rounded-lg flex items-center justify-between px-4 py-3 cursor-pointer"
      >
        <p
          className={`text-sm font-poppins font-medium duration-200 ${
            !selected.label && placeholder ? "opacity-50" : ""
          }`}
        >
          {defaultValue?.label || selected.label || placeholder || ""}
        </p>
        <MdKeyboardArrowDown
          className={`text-2xl text-gray-500 duration-300 ${
            show ? "rotate-180" : ""
          }`}
        />
      </div>
      {show && (
        <div className="relative">
          <div className="absolute overflow-auto max-h-52 flex flex-col gap-1 w-full bg-white border border-solid border-gray-300 rounded-lg mt-2 py-2 px-2">
            {searchInput && (
             <Input
             placeholder="Search"
             LeftIcon={
               <MdOutlineSearch className="text-xl text-gray-500" />
             }
             onChange={(e) => onSearch?.(e.target.value)}
           />
            )}
            {list?.map((item) => (
              <div
                onClick={() => {
                  setShow((prev) => !prev);
                  setSelected(item);
                  onChange?.(item);
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
