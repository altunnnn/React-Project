function Header({selectedTeams,teamMemberCount}){
    return(
        <header>
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Team Member Allocation</h1>
                    <h3>{selectedTeams} has {teamMemberCount} members.</h3>
                </div>
            </div>
            
        </header>
    )
} 
export default Header