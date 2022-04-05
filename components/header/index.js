export const header = {
	type: "header",
	cols: [
		{
			template:
				"<a href='https://docs.webix.com/' target='_blank'><img src='assets/logo.svg' alt='logo' /></a>",
		},
		{},
		{
			view: "richselect",
			value: 1,
			options: [
				{ id: 1, value: "EN" },
				{ id: 2, value: "RU" },
			],
			width: 100,
		},
	],
};
