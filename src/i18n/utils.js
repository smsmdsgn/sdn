import { DEFAULT_LOCALE, LOCALES, ui } from "./ui.js";

// 指定ロケールの文言を返す関数を作る（未定義のキーは既定ロケールの文言）
// 例: const t = useTranslations("ja"); t("menu.about", { label: "HTML" })
export const useTranslations = (locale) => {
	const strings = ui[locale] ?? ui[DEFAULT_LOCALE];
	return (key, params = {}) =>
		(strings[key] ?? ui[DEFAULT_LOCALE][key] ?? key).replace(
			/\{(\w+)\}/g,
			(match, name) => params[name] ?? match,
		);
};

// URL の先頭（/ja/...）か、ソースファイルの src/pages 直下（.../src/pages/ja/...）
const LOCALE_IN_PATH = new RegExp(
	`(?:^|/src/pages)/(${LOCALES.join("|")})(?=/|$)`,
);

// URL やファイルパスに含まれるロケールを返す（例: /src/pages/ja/... → "ja"）
export const getLocaleFromPath = (path = "") =>
	String(path).match(LOCALE_IN_PATH)?.[1] ?? DEFAULT_LOCALE;

// フロントマターの日付（Date または "2026-01-02" / ISO 文字列）を Date に変換
const toDate = (value) => {
	if (!value) return null;
	const date =
		value instanceof Date
			? value
			: new Date(
					String(value).includes("T") ? String(value) : `${value}T00:00:00Z`,
				);
	return Number.isNaN(date.getTime()) ? null : date;
};

const getParts = (formatter, date) => {
	const parts = formatter.formatToParts(date);
	return (type) => parts.find((part) => part.type === type)?.value || "";
};

// 日付のみ（記事の作成日・更新日など）例: 2026年3月26日 JST
export const formatDate = (value, locale) => {
	if (!value) return "";
	const date = toDate(value);
	if (!date) return String(value);

	if (locale === "ja" || locale === "zh-cn") {
		const isJa = locale === "ja";
		const get = getParts(
			new Intl.DateTimeFormat(isJa ? "ja-JP" : "zh-CN", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				timeZone: isJa ? "Asia/Tokyo" : "Asia/Shanghai",
			}),
			date,
		);
		return `${get("year")}年${get("month")}月${get("day")}日 ${isJa ? "JST" : "CST"}`;
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	});
	return `${formatter.format(date)} UTC`;
};

// 日付のみ・タイムゾーン表記なし（ホームの最新ブログ記事カード）例: 2026年2月12日
export const formatCardDate = (value, locale) => {
	if (!value) return "";
	const date = toDate(value);
	if (!date) return String(value);

	if (locale === "ja") {
		const get = getParts(
			new Intl.DateTimeFormat("ja-JP", {
				year: "numeric",
				month: "long",
				day: "numeric",
				timeZone: "Asia/Tokyo",
			}),
			date,
		);
		return `${get("year")}年${get("month")}月${get("day")}日`;
	}
	if (locale === "zh-cn") {
		return new Intl.DateTimeFormat("zh-CN", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			timeZone: "Asia/Shanghai",
		}).format(date);
	}
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	}).format(date);
};
