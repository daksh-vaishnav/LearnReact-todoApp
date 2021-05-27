import React from "react";

export default function Header(props) {
	return (
		<nav className="navbar-light bg-primary text-white text-center p-3">
			<h3 className="mb-0 text-capitalize">{props.title}</h3>
			<div className="d-flex justify-content-end">
			<button
				type="button"
				className="btn btn-warning"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Add
			</button>
			</div>
		</nav>
	);
}
