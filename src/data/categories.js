// コンテンツ分類の定義（サイドバー・パンくず・トップページのカード・カテゴリーページが参照する）
// - 並び順はこの配列の順番（サイドバーもトップページのカードもこの順）
// - label は 3 言語共通の英語表記
// - path はカテゴリーページの URL（/{locale}/{path}/）
// - descKey はトップページのカードの説明文の翻訳キー（src/i18n/ui.js）
// - showOnHome: true のものだけトップページの「Web技術」にカードとして出す
// - subcategories はカテゴリー名と同じ id のものがカテゴリー直下の既存コンテンツを表す。
//   それ以外は下位分類（ページ未作成のため、サイドバーにはリンクなしの見出しとして出る）
export const CATEGORIES = [
	{
		id: "html",
		label: "HTML",
		path: "html",
		descKey: "home.tech.html.desc",
		showOnHome: true,
		subcategories: [{ id: "html", label: "HTML" }],
	},
	{
		id: "css",
		label: "CSS",
		path: "css",
		descKey: "home.tech.css.desc",
		showOnHome: true,
		subcategories: [{ id: "css", label: "CSS" }],
	},
	{
		id: "js",
		label: "JavaScript",
		path: "js",
		descKey: "home.tech.js.desc",
		showOnHome: true,
		subcategories: [
			{ id: "js", label: "JavaScript" },
			{ id: "web-apis", label: "Web APIs" },
		],
	},
	{
		id: "svg",
		label: "SVG",
		path: "svg",
		subcategories: [{ id: "svg", label: "SVG" }],
	},
	{
		id: "media",
		label: "Media",
		path: "media",
		subcategories: [{ id: "media", label: "Media" }],
	},
	{
		id: "pwa",
		label: "PWA",
		path: "pwa",
		subcategories: [{ id: "pwa", label: "PWA" }],
	},
	{
		id: "http",
		label: "HTTP",
		path: "http",
		descKey: "home.tech.http.desc",
		showOnHome: true,
		subcategories: [{ id: "http", label: "HTTP" }],
	},
	{
		id: "uri",
		label: "URI",
		path: "uri",
		subcategories: [{ id: "uri", label: "URI" }],
	},
	{
		id: "dns",
		label: "DNS",
		path: "dns",
		subcategories: [{ id: "dns", label: "DNS" }],
	},
	{
		id: "web-server",
		label: "Web Server",
		path: "web-server",
		descKey: "home.tech.web-server.desc",
		showOnHome: true,
		subcategories: [{ id: "web-server", label: "Web Server" }],
	},
	{
		id: "database",
		label: "Database",
		path: "database",
		subcategories: [{ id: "database", label: "Database" }],
	},
	{
		id: "accessibility",
		label: "Accessibility",
		path: "accessibility",
		descKey: "home.tech.accessibility.desc",
		subcategories: [{ id: "accessibility", label: "Accessibility" }],
	},
	{
		id: "performance",
		label: "Performance",
		path: "performance",
		descKey: "home.tech.performance.desc",
		subcategories: [{ id: "performance", label: "Performance" }],
	},
	{
		id: "security",
		label: "Security",
		path: "security",
		descKey: "home.tech.security.desc",
		showOnHome: true,
		subcategories: [
			{ id: "security", label: "Security" },
			{ id: "privacy", label: "Privacy" },
		],
	},
	{
		id: "seo",
		label: "SEO",
		path: "seo",
		descKey: "home.tech.seo.desc",
		subcategories: [{ id: "seo", label: "SEO" }],
	},
];

// トップページの「Web技術」に出すカテゴリー
export const HOME_CATEGORIES = CATEGORIES.filter((category) => category.showOnHome);

export const getCategory = (id) => {
	const category = CATEGORIES.find((item) => item.id === id);
	if (!category) throw new Error(`Unknown category: ${id}`);
	return category;
};
