import React, { useState, useEffect } from 'react';

export default function LocalStorageDemo1() {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [sem, setSem] = useState('');
  const [roll, setRoll] = useState('');

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const studentString = localStorage.getItem('rollno123');
    if (studentString) {
      const student = JSON.parse(studentString);
      setName(student.name);
      setDept(student.dept);
      setSem(student.sem);
    }
  }, []);

  const retrieveStudentData = () => {
    console.log(roll);
    const studentString = localStorage.getItem(roll);
    console.log("working");
    if (studentString) {
      const student = JSON.parse(studentString);
      console.log(student);
      setName(student.name);
      setDept(student.dept);
      setSem(student.sem);
    } else {
        console.log("working2");
      setName('');
      setDept('');
      setSem('');
    }
  };

  // Save data to localStorage when the 'rollno' changes
  useEffect(() => {
    if (rollno) {
      const student = { name, dept, sem };
      localStorage.setItem(rollno, JSON.stringify(student));
    }
  }, [rollno, name, dept, sem]);

  return (
    <div>
      <h1>Student Information</h1>
      <input
        type="text"
        placeholder="Roll No"
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />
      <input
        type="number"
        placeholder="Semester"
        value={sem}
        onChange={(e) => setSem(e.target.value)}
      />
      <button
        onClick={() => {
        const student = {
            Name: name,
            Dept: dept,
            Sem: sem
          };
          localStorage.setItem(rollno, JSON.stringify(student));
        }}
      >
        Save
      </button>
      <input
        type="text"
        placeholder="roll No"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <button
        onClick={() => {
            // setRollno();
          retrieveStudentData();
        }}
      >
        Retrive
      </button>
    </div>
  );
}
