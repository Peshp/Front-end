import Search from "./Search.jsx";
import Table from "./Table.jsx";

function UserList(){
    return (
        <section className="card users-container">
            <Search/>
            
            <Table/>
        </section>
    );
}

export default UserList;