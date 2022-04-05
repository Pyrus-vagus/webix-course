import { gridToolbar } from "./toolbar.js";
import { grid } from "./grid.js";
import { formSection } from "./form.js";
import { students } from "../variables.js";

export const studentsTab = {
	cols: [
		{
			rows: [gridToolbar, grid],
			gravity: 2,
		},
		{ view: "resizer" },
		formSection,
	],
	id: students,
};
