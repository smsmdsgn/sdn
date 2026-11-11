// フロントマターに source があるページで、最初の h1 の直前に MDN 出典ボックスを挿入する Sätteri の mdast プラグイン
// SourceNotice.astro と同じ構造（.card--note と同じ div > p）を生成する
import { SOURCE_LICENSE } from "../i18n/ui.js";
import { getLocaleFromPath, useTranslations } from "../i18n/utils.js";

const text = (value) => ({ type: "text", value });

const toLink = (url, value) => ({
	type: "link",
	url,
	data: {
		hProperties: {
			className: ["external-link"],
			target: "_blank",
			rel: ["noopener", "noreferrer"],
		},
	},
	children: [text(value)],
});

const toSourceNotice = ({ url, title }, t) => ({
	type: "customElement",
	data: {
		hName: "div",
		hProperties: { className: ["card", "card--note", "source-notice"] },
	},
	children: [
		{
			type: "paragraph",
			children: [
				text(t("source.before")),
				toLink(url, title),
				text(t("source.middle")),
				toLink(SOURCE_LICENSE.url, SOURCE_LICENSE.name),
				text(t("source.after")),
			],
		},
	],
});

// source を持つページでだけプラグインを有効にする（ファクトリが null を返すと無効）
export default ({ data, fileURL }) => {
	const source = data.astro?.frontmatter?.source;
	if (!source?.url || !source?.title) return null;

	const t = useTranslations(getLocaleFromPath(fileURL?.pathname));
	let inserted = false;

	return {
		name: "source-notice",
		// 最初の h1 の直前に挿入（<section className="main__header"> 内にあっても対象）
		heading(node, ctx) {
			if (inserted || node.depth !== 1) return;
			inserted = true;
			ctx.insertBefore(node, toSourceNotice(source, t));
		},
	};
};
