// :::note / :::feedback ディレクティブを HTML に変換する Sätteri の mdast プラグイン
// （ディレクティブの解析自体は Sätteri の features.directive が行う）
import { formatDate, getLocaleFromPath, useTranslations } from "../i18n/utils.js";

// data.hName / hProperties で任意の HTML 要素になるユーザー定義ノード
const el = (tagName, properties, children) => ({
	type: "customElement",
	data: { hName: tagName, hProperties: properties },
	children,
});
const text = (value) => ({ type: "text", value });

const renderNote = (node, ctx, t) => {
	const [first, ...rest] = node.children;
	const children =
		first?.type === "paragraph" && first.children[0]?.type !== "strong"
			? [
					{
						...first,
						children: [
							{ type: "strong", children: [text(t("note.label"))] },
							text(" "),
							...first.children,
						],
					},
					...rest,
				]
			: node.children;
	ctx.replaceNode(node, el("div", { className: ["card", "card--note"] }, children));
};

const renderFeedback = (node, ctx, t, locale) => {
	const { createdAt, updatedAt } = ctx.data.astro?.frontmatter ?? {};
	const messages = [];
	if (createdAt) messages.push(`${t("feedback.created")}${formatDate(createdAt, locale)}`);
	if (updatedAt) messages.push(`${t("feedback.updated")}${formatDate(updatedAt, locale)}`);

	// 見出し ID の自動付与や目次の対象から外すため、h2 は MDX の JSX 要素として出力する
	const heading =
		ctx.sourceFormat === "mdx"
			? { type: "mdxJsxFlowElement", name: "h2", attributes: [], children: [text(t("feedback.title"))] }
			: el("h2", {}, [text(t("feedback.title"))]);

	ctx.replaceNode(
		node,
		el("section", { className: ["feedback"] }, [
			heading,
			el("button", { type: "button" }, [text(t("feedback.yes"))]),
			el("button", { type: "button" }, [text(t("feedback.no"))]),
			el("p", {}, [text(messages.join(" / ") || "-")]),
			el("a", { href: "#" }, [text(t("feedback.report"))]),
		]),
	);
};

export default {
	name: "directives",
	containerDirective(node, ctx) {
		const locale = getLocaleFromPath(ctx.fileURL?.pathname);
		const t = useTranslations(locale);
		if (node.name === "note") renderNote(node, ctx, t);
		else if (node.name === "feedback") renderFeedback(node, ctx, t, locale);
	},
};
