// 実在するページの URL 一覧（src/pages のファイルから作る）。
// リンク先のページがまだ無い（未作成・その言語に未翻訳）ときに、404 へのリンクを出さないために使う。
// - 動的ルート（[slug] など）は無い前提。追加したら判定を見直すこと
const PAGE_FILES = Object.keys(import.meta.glob("/src/pages/**/*.{astro,md,mdx}"));

// "/src/pages/ja/blog/foo.mdx" → "/ja/blog/foo/"、"/src/pages/ja/index.astro" → "/ja/"
const toUrlPath = (file) =>
	`${file
		.replace(/^\/src\/pages/, "")
		.replace(/\.(astro|mdx?)$/, "")
		.replace(/\/index$/, "")}/`;

const PAGE_PATHS = new Set(PAGE_FILES.map(toUrlPath));

// href（"/ja/css/" など。末尾スラッシュ・#・? はあってもなくてもよい）のページが実在するか
export const pageExists = (href) => {
	if (!href || !href.startsWith("/")) return false;
	const path = href.replace(/[?#].*$/, "");
	return PAGE_PATHS.has(path.endsWith("/") ? path : `${path}/`);
};

// 実在しなければ、実在する一番近い上の階層を返す（例: /en-us/blog/foo/ → /en-us/blog/）
export const nearestExistingPage = (href) => {
	let path = href.replace(/[?#].*$/, "");
	if (!path.endsWith("/")) path = `${path}/`;
	while (path !== "/" && !PAGE_PATHS.has(path)) {
		path = path.replace(/[^/]+\/$/, "");
	}
	return path;
};
