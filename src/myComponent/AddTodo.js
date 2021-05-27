import React from "react";

export const AddTodo = () => {
	return (
		<div>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add New Todo
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="recipient-name" className="col-form-label">
										Title:
									</label>
									<input
										type="text"
										className="form-control"
										id="recipient-name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="message-text" className="col-form-label">
										Description:
									</label>
									<textarea
										className="form-control"
										id="message-text"
									></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
