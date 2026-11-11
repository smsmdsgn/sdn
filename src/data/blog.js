// import.meta.glob はパスに変数を使えないため、ロケールごとに列挙する
const ENTRIES = {
	"en-us": import.meta.glob("/src/pages/en-us/blog/*.mdx", { eager: true }),
	ja: import.meta.glob("/src/pages/ja/blog/*.mdx", { eager: true }),
	"zh-cn": import.meta.glob("/src/pages/zh-cn/blog/*.mdx", { eager: true }),
};

const toPost = ({ url = "", frontmatter: fm = {} }) => ({
	url: url && !url.endsWith("/") ? `${url}/` : url,
	title: fm.title ?? "Untitled",
	desc: fm.desc ?? "",
	createdAt: fm.createdAt ?? "",
	author: fm.author ?? "",
	authorUrl: fm["author-url"] ?? "",
	thumbnail: fm.thumbnail ?? "",
});

// createdAt（Date または日付文字列）のタイムスタンプ。不正・未設定なら 0
const toTime = (value) => (value ? new Date(value).getTime() || 0 : 0);

// 指定ロケールのブログ記事を新しい順で返す
export const getBlogPosts = (locale) =>
	Object.values(ENTRIES[locale] ?? ENTRIES["en-us"])
		.map(toPost)
		.filter((post) => post.url)
		.sort((a, b) => toTime(b.createdAt) - toTime(a.createdAt));
