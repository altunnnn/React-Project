import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';


function App() {
  
  const [selectedTeams, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeams')) || "Team B");
    const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);


      function handleTeamSelect(event){
        console.log(event.target.value);
        setTeam(event.target.value);
      }
      
      function handleEmployeeCardClick(employeeId) {
        const transformedEmployee = employees.map((employee) =>
          employee.id === parseInt(employeeId)
            ? employee.teamName === selectedTeams
              ? { ...employee, teamName: "" }
              : { ...employee, teamName: selectedTeams }
            : employee
        );
        setEmployees(transformedEmployee);
      }

      useEffect(() => {
        localStorage.setItem('employeeList',JSON.stringify(employees))
      },[employees])

      useEffect(() => {
        localStorage.setItem('selectedTeams',JSON.stringify(selectedTeams))
      },[selectedTeams])
      return (
        
        <Router>
      <Header 
        selectedTeams={selectedTeams}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeams).length}
      />
      <Routes>
        <Route exact path = "/" element = { <Employees 
                                  employees={employees}
                                  selectedTeams={selectedTeams}
                                  handleEmployeeCardClick={handleEmployeeCardClick}
                                  handleTeamSelect={handleTeamSelect}
                                />}  />
        <Route exact path = "/grouped" element = {<GroupedTeamMembers />} />
        
      </Routes>
      <Footer />
    </Router>
        
      );
}

export default App
