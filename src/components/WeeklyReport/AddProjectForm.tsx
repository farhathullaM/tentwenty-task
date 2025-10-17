import { Info } from "lucide-react";
import CustomSelect from "../ui/CustomSelect";
import { useState } from "react";
import { projectOptions, typeOfWork } from "../../constants/data";

const AddProjectForm = () => {
  const [project, setProject] = useState("");
  const [work, setWork] = useState("");

  return (
    <form>
      <div className="flex flex-col gap-2 w-72">
        <div className="flex gap-1">
          <label htmlFor="project">Select Project</label>
          <span>*</span>
          <Info className="w-3" />
        </div>
        <CustomSelect
          value={project}
          options={projectOptions}
          onChange={setProject}
          placeholder="Project Name"
        />
      </div>

      <div className="flex flex-col gap-2 w-72">
        <div className="flex gap-1">
          <label htmlFor="project">Type of work</label>
          <span>*</span>
          <Info className="w-3" />
        </div>
        <CustomSelect
          value={work}
          options={typeOfWork}
          onChange={setWork}
          placeholder="Bug fixes"
        />
      </div>

      <textarea name="" id=""></textarea>
    </form>
  );
};

export default AddProjectForm;
