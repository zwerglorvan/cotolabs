var modules = {
	basePath : "modules/",
	"home" : {
		path : "home/",
		template : "home.html",
		script : "home.js",
		dependencies : [],
	},
	"form" : {
		path : "form/",
		template : "form.html",
		script : "form.js",
		dependencies : ["steps.js"],
	},
}