var categories = [
	{
		name: "For Sale",
		value: "for-sale",
		src: "resources/for_sale.png"
	},
	{
		name: "Housing",
		value: "housing",
		src: "resources/housing.png"
	},
	{
		name: "Jobs",
		value: "jobs",
		src: "resources/jobs.png"
	},
	{
		name: "Community",
		value: "community",
		src: "resources/community.png"
	},
	{
		name: "Services",
		value: "services",
		src: "resources/services.png"
	},
	{
		name: "Wanted",
		value: "wanted",
		src: "resources/wanted.png"
	}
];

Template.categories.helpers({
	categories: categories
});

Template.categories.events({
	'click .thumbnail': function (e) {
		return Session.set('category', e.target.id);
	}
});