import React from 'react';
import { Briefcase, GraduationCap, BookOpenCheck } from 'lucide-react'; // Example using react-icons

const IconBasedOnTitle = ({ title }) => {
    let iconSize = 24
    let iconComponent = <Briefcase size={iconSize}/>; // Or a default icon
  
  switch (title) {
    case 'S.T.E.M Instructor':
      iconComponent = <BookOpenCheck size={iconSize}/>;
      break;
    case 'Computer Engineering Graduate':
      iconComponent = <GraduationCap size={iconSize}/>;
      break;
    default:
      
  }

  return <div className="text-gray-400 p-2">{iconComponent}</div>;
};

export default IconBasedOnTitle;