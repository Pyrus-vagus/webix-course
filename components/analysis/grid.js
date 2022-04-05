export const grid = {
	view: "datatable",
	columns: [
		{
			id: "ch",
			header: { content: "masterCheckbox" },
			template: "{common.checkbox()}",
			width: 40,
		},
		{ id: "name", header: "Name", fillspace: true },
		{ id: "lesson", header: "Lesson" },
		{ id: "lesson_topic", header: "Lesson Topic", width: 200 },
		{ id: "grade", header: "Grade" },
		{ id: "fgrade", header: "Final Grade" },
	],
	url: "models/analysis.json",
};
