import { lessons } from "../variables.js";

const gridToolbar = {
	view: "toolbar",
	type: "header",
	elements: [
		{ template: "Lessons" },
		{},
		{ view: "text", placeholder: "Search" },
		{ view: "button", width: 40, value: "+" },
		{ view: "button", width: 40, value: "-" },
	],
};
const lessonGrid = {
	view: "treetable",
	select: true,
	columns: [
		{
			id: "value",
			header: "Topic",
			fillspace: true,
			template: "{common.treetable()} #value#",
		},
	],

	url: "models/lessons.json",
};
export const lessonTree = {
	id: lessons,
	rows: [gridToolbar, lessonGrid],
};
