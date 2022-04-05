import { studentsList } from "./list.js";
import { grid } from "./grid.js";
import { gridToolbar } from "./toolbar.js";
import { analysis } from "../variables.js";

export const analysisTab = {
	id: analysis,
	rows: [{ cols: [studentsList] }, { rows: [gridToolbar, grid] }],
};
