import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-4 p-4">
			<div className="container">
				<Link to="/">
					<h1 className="navbar-brand mb-0">Contacts</h1>
				</Link>
				<div className="ml-auto">
					<Link to="/add_contact">
						<button className="btn btn-primary">Add new Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};