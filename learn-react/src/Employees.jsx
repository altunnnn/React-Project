import femaleProfile from "./images/female-profile.jpg";
import maleProfile from "./images/male-profile.jpg";
import "./App.css";

function Employees({employees,selectedTeams,handleEmployeeCardClick,handleTeamSelect}){
  
      return (
        <main className="container">
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
              <select className="form-select form-select-lg" value={selectedTeams} onChange={handleTeamSelect}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
              <div className="card-collection">
                {
                  employees.map((employee) => (
                    <div
                        key={employee.id}
                        className={
                          employee.teamName === selectedTeams ? "card m-2 standout" : "card m-2"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEmployeeCardClick(employee.id)} 
                      >
                      {(employee.gender===`male`)?<img src={maleProfile} className="card-img-top" alt="Employee" />
                                                  :<img src={femaleProfile} className="card-img-top" alt="Employee" />}
                      <div className="card-body">
                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                        <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
      );
      
      
}
export default Employees