import NoProjectImage from '../../assets/no-projects.png'
import Button from '../Button/Button';

export default function NoProject({onStartAddProject}){
  return (
    <div className="mt-24 text-center w-2/3">
      <img 
        src={NoProjectImage} 
        alt="No Project Selected"
        className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-">Please select a project from the sidebar</p>
      <p className="mt-8">
        <Button 
          onClick={onStartAddProject}
          label="Create New Project" />
      </p>
    </div>
  );
}