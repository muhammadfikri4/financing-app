import { useEffect, useRef, useState } from "react";
import { Poppins } from "../Text/Poppins";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

interface IDateYearPicker {
  value?: Date;
  onChange: (value: Date) => void;
}

export const DateYearPicker: React.FC<IDateYearPicker> = ({
  onChange,
  value,
}) => {

  const currentYear =  value ? new Date(value).getFullYear() : new Date().getFullYear()
  // const [currentPage, setCurrentPage] = useState(currentYear);
  const [selectedYear, setSelectedYear] = useState(
    value ? new Date(value).getFullYear() : new Date().getFullYear()
  );
  const yearsPerPage = 9;
  const [show, setShow] = useState(false);

  // Membuat daftar tahun dari 1900 hingga tahun 9999 (atau sesuai kebutuhan)
  const endYear = 999999;
  const startYear = 1;
  const years = Array.from(
    new Array(endYear - startYear + 1),
    (_, index) => startYear + index
  );

  // Menentukan halaman awal berdasarkan tahun saat ini
  const currentYearIndex = years.indexOf(currentYear); // Cari indeks tahun saat ini
  const [currentPage, setCurrentPage] = useState(
    Math.floor(currentYearIndex / yearsPerPage)
  );

  // Menghitung halaman tahun berdasarkan page yang dipilih
  const paginatedYears = years.slice(
    currentPage * yearsPerPage,
    (currentPage + 1) * yearsPerPage
  );

 // Ref untuk menangkap elemen utama
 const ref = useRef<HTMLDivElement>(null);

 // Menambahkan event listener untuk klik di luar elemen
 useEffect(() => {
   const handleClickOutside = (event: MouseEvent) => {
     if (ref.current && !ref.current.contains(event.target as Node)) {
       setShow(false); // Tutup popup jika klik di luar
     }
   };

   document.addEventListener("mousedown", handleClickOutside);
   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, []);

  // Menghitung halaman tahun berdasarkan page yang dipilih
  const handleNext = () => {
    if ((currentPage + 1) * yearsPerPage < years.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div ref={ref}>
      <div
        className="cursor-pointer rounded-lg border border-solid border-gray-400 p-3 px-4 flex items-center gap-4"
        onClick={() => setShow(!show)}
      >
        <BsCalendarDate className="text-gray-400" />
        <Poppins className="text-gray-400 text-sm">Select Year</Poppins>
      </div>
      {show && (
        <div className="absolute flex flex-col items-center justify-center gap-4 bg-white border border-gray-300 border-solid w-80 p-4 rounded-xl mt-1">
          <div className="w-full flex items-center justify-between gap-4">
            <div
              onClick={handlePrev}
              className="p-1 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft className="text-6xl" />
            </div>
            <Poppins>
              {paginatedYears[0]} - {paginatedYears[paginatedYears.length - 1]}
            </Poppins>
            <div
              onClick={handleNext}
              className=" p-1 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <MdOutlineKeyboardArrowRight className="text-6xl" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {paginatedYears.map((year) => (
              <button
                key={year}
                onClick={() => {
                  handleSelectYear(year);
                  onChange(new Date(year, 0, 1));
                }}
                className={`px-4 py-2 ${selectedYear === year ? '' : 'border border-gray-200'} rounded-md shadow-sm focus:outline-none hover:bg-gray-200 ${
                  selectedYear === year ? "bg-blue-500 text-white" : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
