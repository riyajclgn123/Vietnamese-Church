import React from 'react';
import './Graduates.css';

import student1 from '../assets/p1.jpg';
import student2 from '../assets/p2.jpg';
import student3 from '../assets/p3.jpg';

const graduates = [
  {
    photo: student1,
    name: "Nguyen Van C",
    major: "Computer Science",
    university: "Hanoi University of Science and Technology"
  },
  {
    photo: student2,
    name: "Tran Thi D",
    major: "Business Administration",
    university: "Vietnam National University, Hanoi"
  },
  {
    photo: student3,
    name: "Le Van E",
    major: "Mechanical Engineering",
    university: "Ho Chi Minh City University of Technology"
  },
  {
    photo: student1,
    name: "Nguyen Van C",
    major: "Computer Science",
    university: "Hanoi University of Science and Technology"
  },
  {
    photo: student2,
    name: "Tran Thi D",
    major: "Business Administration",
    university: "Vietnam National University, Hanoi"
  },
  {
    photo: student3,
    name: "Le Van E",
    major: "Mechanical Engineering",
    university: "Ho Chi Minh City University of Technology"
  },
  {
    photo: student1,
    name: "Nguyen Van C",
    major: "Computer Science",
    university: "Hanoi University of Science and Technology"
  },
  {
    photo: student2,
    name: "Tran Thi D",
    major: "Business Administration",
    university: "Vietnam National University, Hanoi"
  },
  {
    photo: student3,
    name: "Le Van E",
    major: "Mechanical Engineering",
    university: "Ho Chi Minh City University of Technology"
  },
  {
    photo: student1,
    name: "Nguyen Van C",
    major: "Computer Science",
    university: "Hanoi University of Science and Technology"
  },
  {
    photo: student2,
    name: "Tran Thi D",
    major: "Business Administration",
    university: "Vietnam National University, Hanoi"
  },
  {
    photo: student3,
    name: "Le Van E",
    major: "Mechanical Engineering",
    university: "Ho Chi Minh City University of Technology"
  },
 
];

const Graduates: React.FC = () => {
  return (
    <div className="graduates-container">
      <h1>Our Graduates</h1>
      <div className="graduates-list">
        {graduates.map((grad, idx) => (
          <div className="graduate-card" key={idx}>
            <img src={grad.photo} alt={grad.name} className="graduate-photo" />
            <h3>{grad.name}</h3>
            <p className="graduate-major">{grad.major}</p>
            <p className="graduate-university">{grad.university}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graduates;