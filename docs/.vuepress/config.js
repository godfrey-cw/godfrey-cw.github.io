module.exports = {
    base: "/~cgodfrey/",
    head: [
	["link",  {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"}],
	// ["link",  {rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}],
    ],
    title: "Charlie Godfrey",
    description: "PhD Candidate, University of Washington Department of Mathematics",
    markdown: {
	anchor: { permalink: false },
	extendMarkdown: md => {
	    md.use(require("@iktakahiro/markdown-it-katex"))
	}
    },
    themeConfig: {
	nav: false,
	search: false,
	sidebar: [
	    ["/", "Home"],
	    {
		title: "Teaching",
		collapsable: true,
		children: [
		    "/teaching/",
		    "/teaching/Math307Winter2019/"
		    ]
	    },
            {
		title: "Organizing",
		collapsable: true,
		children: [
		    "/organizing/",
		    "/organizing/M_gSeminar/"
		    ]
	    }
	],
	sidebarDepth: 2,
	lastUpdated: "Last Updated",
    }
}
 
