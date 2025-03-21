import { useState } from "react";
import { faqData } from "./DummyData";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mt-[2rem] w-[95%] mx-auto md:w-full">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border w-full border-[#dadada] py-2 mb-4 rounded-xl"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-[95%] mx-auto text-left font-medium text-base md:text-xl text-white focus:outline-none"
          >
            {item.question}
            <FaChevronDown
              className={`text-gray-600 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all w-[95%] mx-auto duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-40 opacity-100 mt-3 "
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-white text-sm md:text-base lg:text-lg">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
