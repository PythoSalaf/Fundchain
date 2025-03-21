import { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFundingContext";

const CreateCampaign = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const { createCampaign } = useContext(CrowdFundingContext);
  const handleFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!createCampaign) {
      console.log("create Campaign is  not working");

      return;
    }
    if (
      !form.title ||
      !form.description ||
      !form.target ||
      !form.deadline ||
      !form.image
    ) {
      return alert("All field must be filled");
    }
    try {
      await createCampaign(
        form.title,
        form.description,
        form.target,
        form.deadline,
        form.image
      );
      alert("Campaign Created Successfully");
    } catch (error) {
      console.log("This is the error", error);
    }
    console.log(form);
  };
  return (
    <div className="pt-[4rem]  w-full">
      <div className="w-[96%] bg-white shadow-2xl py-4 md:w-[94%] lg:w-[90%] mx-auto">
        <div className="w-[94%] mx-auto py-2">
          <div className="bg-black w-[40%] md:w-[25%] py-1.5 mx-auto text-xl rounded-2xl md:text-2xl flex items-center justify-center">
            <h3 className="text-white">Start a Campagin</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-center mt-6 gap-6 justify-between">
              <div className="w-full">
                <label>
                  Your Name<span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="w-full h-9 border px-3 mt-1.5 rounded-xl"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={(e) => handleFieldChange("name", e)}
                />
              </div>
              <div className="w-full">
                <label>
                  Campaign Title<span className="text-red-700">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="w-full h-9 border px-3 mt-1.5 rounded-xl"
                  placeholder="Enter Name"
                  value={form.title}
                  onChange={(e) => handleFieldChange("title", e)}
                />
              </div>
            </div>
            <div className="my-8">
              <label className="">
                Story<span className="text-red-700">*</span>
              </label>
              <textarea
                className="w-full border mt-1.5 border-black rounded-xl h-24 md:h-32 resize-none px-4 pt-3"
                value={form.description}
                onChange={(e) => handleFieldChange("description", e)}
              ></textarea>
            </div>
            <div className="bg-blue-500 w-full rounded-2xl">
              <div className="w-[94%] mx-auto py-4">
                <h3 className="">You'll get 100% of the raised amount</h3>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 mt-5">
              <div className="w-full">
                <label>
                  Goal<span className="text-red-700">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="w-full h-9 border px-3 mt-1.5 rounded-xl"
                  placeholder="ETH 0.05"
                  value={form.target}
                  onChange={(e) => handleFieldChange("target", e)}
                />
              </div>
              <div className="w-full">
                <label>
                  End Date<span className="text-red-700">*</span>{" "}
                </label>
                <input
                  type="date"
                  className="w-full h-9 border px-3 mt-1.5 rounded-xl"
                  placeholder="Enter Date"
                  value={form.deadline}
                  onChange={(e) => handleFieldChange("deadline", e)}
                />
              </div>
            </div>
            <div className="my-5">
              <label>
                Campaign-Image<span className="text-red-700">*</span>{" "}
              </label>
              <input
                type="url"
                className="w-full h-9 border px-3 mt-1.5 rounded-xl"
                placeholder="Please enter your image url"
                value={form.image}
                onChange={(e) => handleFieldChange("image", e)}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="linear cursor-pointer font-semibold text-base md:text-lg capitalize px-3 py-1.5 rounded-2xl">
                submit new campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
