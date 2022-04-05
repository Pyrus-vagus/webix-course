import { side_list } from "../variables.js";

export const side = {
	view: "list",
	id: side_list,
	select: true,
	scroll: false,
	width: 150,
	data: [
		{ id: "Students", value: "Students" },
		{ id: "Lessons", value: "Lessons" },
		{ id: "Analysis", value: "Analysis" },
	],
	on: {
		onAfterSelect: function (id) {
			$$(id).show();
		},
	},
};
