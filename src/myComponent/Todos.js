import React from "react";
import PropTypes from "prop-types";

import { TodoItem } from "./TodoItem";
// import { TodoItem } from "./TodoItem";

export default function Todos({ data, eventHandlers }) {
	return (
		<div>
			<div className="accordion my-4" id="accordionExample">
				{data.length ? (
					data.map((todo, idx) => {
						return (
							<TodoItem
								todo={todo}
								index={idx}
								key={idx}
								eventHandlers={eventHandlers}
							/>
						);
					})
				) : (
					<h5 className="display-4">No such Todo Yet!!!</h5>
				)}
			</div>
		</div>
	);
}
Todos.defaultProps = {
	// todo: { title: "default title", desc: "default description" },
	data: null,
};

Todos.propTypes = {
	data: PropTypes.array.isRequired,
	eventHandlers: PropTypes.object.isRequired,
};
