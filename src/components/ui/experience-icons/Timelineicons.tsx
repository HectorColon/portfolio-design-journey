import React from 'react';
import { Briefcase, GraduationCap, BookOpenCheck } from 'lucide-react'; // Example using react-icons

const IconBasedOnTitle = ({ type }) => {
    let iconSize = 24
    let iconComponent = <Briefcase size={iconSize}/>; // Or a default icon
  
  switch (type) {
    case 'school':
      iconComponent = <BookOpenCheck size={iconSize}/>;
      break;
    case 'college':
      iconComponent = <GraduationCap size={iconSize}/>;
      break;
    default:
      
  }

  return <div className="text-gray-400 p-2">{iconComponent}</div>;
};

export default IconBasedOnTitle;