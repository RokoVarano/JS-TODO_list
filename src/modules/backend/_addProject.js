import Project from './_Project_class';
import ProjectMemory from './_localStorage';

const getValue = (input) => {
  const inputValue = input.value;
  const projectMemory = new ProjectMemory();
  projectMemory.addProject(new Project(inputValue));
  console.log(input.value);
};

export default getValue;