import '../App.css';

export default function Nav(){
    return(
        <nav className="navbar fixed-top navbar-dark" style={{backgroundColor: "#0f0f0f"}}>
            <img src="images/logo.png" class="navbar-brand" />
            <form className="form-inline">
                <button className="btn btn-danger" type="button">Register</button>
            </form>
        </nav>
    );
}
