import React from "react";
import PropTypes from "prop-types";

// export const todoItem = (props) => { // or u can destrcturing it like this
export const TodoItem = ({ todo, index, eventHandlers }) => {
	const styleForDone =
		{textDecoration: "line-through"};
	return (
		<div className="card">
			{/* <div className="card-header" id={"headingOne".replace("One", props.index)}> */}
			<div
				className="card-header d-flex"
				id={"headingOne".replace("One", index + 1)}
				data-toggle="collapse"
				data-target={"#collapseOne".replace("One", index + 1)}
				aria-expanded="true"
				aria-controls="collapseOne"
			>
				<h2 className="mb-0 mr-auto" style={todo.complete ? styleForDone : {} }>
					<span className="btn btn-link btn-block text-left">
						{/* { props.todo.title} */}
						{todo.title}
					</span>
				</h2>
				{todo.complete ? (
					<button
						className="btn btn-sm btn-warning align-self-end mx-2"
						onClick={() => {
							eventHandlers.onUndone(index);
						}}
					>
						Undone
					</button>
				) : (
					""
				)}
				{todo.complete ? (
					<button
						className="btn btn-sm btn-danger align-self-end mx-2"
						onClick={() => {
							eventHandlers.onDelete(index);
						}}
					>
						Delete
					</button>
				) : (
					""
				)}
				{!todo.complete ? (
					<button
						className="btn btn-sm btn-info align-self-end mx-2"
						onClick={() => {
							eventHandlers.onDone(index);
						}}
					>
						Done
					</button>
				) : (
					""
				)}
			</div>

			<div
				id={"collapseOne".replace("One", index + 1)}
				className="collapse"
				aria-labelledby={"headingOne".replace("One", index + 1)}
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<p>{todo.desc}</p>
					{/* {props.todo.desc} */}
				</div>
			</div>
		</div>
	);
};

TodoItem.defaultProps = {
	todo: { title: "default title", desc: "default description" },
};

TodoItem.propTypes = {
	todo: PropTypes.object,
	index: PropTypes.number.isRequired,
};
