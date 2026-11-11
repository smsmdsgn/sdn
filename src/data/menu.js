import { CATEGORIES } from "./categories.js";

// カテゴリー直下の既存コンテンツ（記事のツリー）。カテゴリー自体の並びと名前は categories.js で定義
const buildArticleMenu = (locale) => [
	{
		label: { "en-us": "HTML", ja: "HTML", "zh-cn": "HTML" },
		href: `/${locale}/html/`,
		children: [
			{
				label: { "en-us": "Guide", ja: "ガイド", "zh-cn": "指南" },
				href: `/${locale}/html/guide/`,
				isLabel: true,
				children: [
					{
						label: {
							"en-us": "Comment",
							ja: "コメント",
							"zh-cn": "注释",
						},
						href: `/${locale}/html/guide/comment/`,
					},
					{
						label: {
							"en-us": "Adding JavaScript",
							ja: "JavaScriptの追加",
							"zh-cn": "添加 JavaScript",
						},
						href: `/${locale}/html/guide/add-javascript/`,
					},
				],
			},
			{
				label: {
					"en-us": "Reference",
					ja: "リファレンス",
					"zh-cn": "参考",
				},
				href: `/${locale}/html/reference/`,
				isLabel: true,
				children: [
					{
						label: {
							"en-us": "Element",
							ja: "要素",
							"zh-cn": "元素",
						},
						href: `/${locale}/html/reference/element/`,
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "header",
									ja: "header",
									"zh-cn": "header",
								},
								href: `/${locale}/html/reference/element/header/`,
							},
						],
					},
					{
						label: {
							"en-us": "Attribute",
							ja: "属性",
							"zh-cn": "属性",
						},
						href: `/${locale}/html/reference/attribute/`,
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "loading",
									ja: "loading",
									"zh-cn": "loading",
								},
								href: `/${locale}/html/reference/attribute/loading/`,
							},
						],
					},
				],
			},
		],
	},
	{
		label: { "en-us": "CSS", ja: "CSS", "zh-cn": "CSS" },
		href: `/${locale}/css/`,
		children: [
			{
				label: { "en-us": "Guide", ja: "ガイド", "zh-cn": "指南" },
				href: `/${locale}/css/guide/`,
				isLabel: true,
				children: [
					{
						label: { "en-us": "Color", ja: "色", "zh-cn": "颜色" },
						href: `/${locale}/css/guide/color/`,
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "Applying Color",
									ja: "色の適用",
									"zh-cn": "颜色的应用",
								},
								href: `/${locale}/css/guide/color/applying-color/`,
							},
							{
								label: {
									"en-us": "Color Values",
									ja: "色値",
									"zh-cn": "颜色值",
								},
								href: `/${locale}/css/guide/color/color-values/`,
							},
						],
					},
				],
			},
			{
				label: {
					"en-us": "Reference",
					ja: "リファレンス",
					"zh-cn": "参考",
				},
				href: `/${locale}/css/reference/`,
				isLabel: true,
				children: [
					{
						label: {
							"en-us": "Property",
							ja: "プロパティ",
							"zh-cn": "属性",
						},
						href: `/${locale}/css/reference/property/`,
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "grid-area",
									ja: "grid-area",
									"zh-cn": "grid-area",
								},
								href: `/${locale}/css/reference/property/grid-area/`,
							},
							{
								label: {
									"en-us": "overscroll-behavior",
									ja: "overscroll-behavior",
								},
								href: `/${locale}/css/reference/property/overscroll-behavior/`,
							},
							{
								label: {
									"en-us": "text-autospace",
									ja: "text-autospace",
									"zh-cn": "text-autospace",
								},
								href: `/${locale}/css/reference/property/text-autospace/`,
							},
						],
					},
					{
						label: {
							"en-us": "Selector",
							ja: "セレクター",
							"zh-cn": "选择器",
						},
						href: `/${locale}/css/reference/selector/`,
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "Attribute Selector",
									ja: "属性セレクター",
									"zh-cn": "属性选择器",
								},
								href: `/${locale}/css/reference/selector/attribute-selector/`,
							},
						],
					},
				],
			},
		],
	},
	{
		label: {
			"en-us": "JavaScript",
			ja: "JavaScript",
			"zh-cn": "JavaScript",
		},
		href: `/${locale}/js/`,
		children: [
			{
				label: {
					"en-us": "Tutorial",
					ja: "チュートリアル",
					"zh-cn": "教程",
				},
				href: `/${locale}/js/tutorial/`,
				isLabel: true,
				children: [
					{
						label: {
							"en-us": "Beginner",
							ja: "初級編",
							"zh-cn": "初级",
						},
						isAccordion: true,
						children: [
							{
								label: {
									"en-us": "Introduction",
									ja: "JavaScript入門",
									"zh-cn": "JavaScript 入门",
								},
								href: `/${locale}/js/tutorial/beginner/introduction/`,
							},
							{
								label: {
									"en-us": "Grammar & Types",
									ja: "文法とデータ型",
									"zh-cn": "语法和数据类型",
								},
								href: `/${locale}/js/tutorial/beginner/grammar-and-types/`,
							},
							{
								label: {
									"en-us": "Control flow & Error handling",
									ja: "制御フローとエラー処理",
									"zh-cn": "控制流和错误处理",
								},
								href: `/${locale}/js/tutorial/beginner/control-flow-and-error-handling/`,
							},
							{
								label: {
									"en-us": "Loops & Iteration",
									ja: "ループとイテレータ",
									"zh-cn": "循环和迭代",
								},
								href: `/${locale}/js/tutorial/beginner/loops-and-iteration/`,
							},
							{
								label: {
									"en-us": "Functions",
									ja: "関数",
									"zh-cn": "函数",
								},
								href: `/${locale}/js/tutorial/beginner/functions/`,
							},
							{
								label: {
									"en-us": "Expressions & Operators",
									ja: "式と演算子",
									"zh-cn": "表达式和运算符",
								},
								href: `/${locale}/js/tutorial/beginner/expressions-and-operators/`,
							},
							{
								label: {
									"en-us": "Numbers & Strings",
									ja: "数値と文字列",
									"zh-cn": "数字和字符串",
								},
								href: `/${locale}/js/tutorial/beginner/numbers-and-strings/`,
							},
							{
								label: {
									"en-us": "Dates & Times",
									ja: "日付と時刻",
									"zh-cn": "日期和时间",
								},
								href: `/${locale}/js/tutorial/beginner/dates-and-times/`,
							},
							{
								label: {
									"en-us": "Regular expressions",
									ja: "正規表現",
									"zh-cn": "正则表达式",
								},
								href: `/${locale}/js/tutorial/beginner/regular-expressions/`,
							},
							{
								label: {
									"en-us": "Indexed collections",
									ja: "インデックス付きコレクション",
									"zh-cn": "索引集合",
								},
								href: `/${locale}/js/tutorial/beginner/indexed-collections/`,
							},
							{
								label: {
									"en-us": "Keyed collections",
									ja: "キー付きコレクション",
									"zh-cn": "键值集合",
								},
								href: `/${locale}/js/tutorial/beginner/keyed-collections/`,
							},
							{
								label: {
									"en-us": "Objects",
									ja: "オブジェクト",
									"zh-cn": "对象",
								},
								href: `/${locale}/js/tutorial/beginner/objects/`,
							},
							{
								label: {
									"en-us": "Classes",
									ja: "クラス",
									"zh-cn": "类",
								},
								href: `/${locale}/js/tutorial/beginner/classes/`,
							},
							{
								label: {
									"en-us": "Promises",
									ja: "プロミス",
									"zh-cn": "Promise",
								},
								href: `/${locale}/js/tutorial/beginner/promises/`,
							},
							{
								label: {
									"en-us": "Typed array",
									ja: "型付き配列",
									"zh-cn": "类型化数组",
								},
								href: `/${locale}/js/tutorial/beginner/typed-array/`,
							},
							{
								label: {
									"en-us": "Iterators & Generators",
									ja: "イテレーターとジェネレーター",
									"zh-cn": "迭代器和生成器",
								},
								href: `/${locale}/js/tutorial/beginner/iterators-and-generators/`,
							},
							{
								label: {
									"en-us": "Resource management",
									ja: "リソース管理",
									"zh-cn": "资源管理",
								},
								href: `/${locale}/js/tutorial/beginner/resource-management/`,
							},
							{
								label: {
									"en-us": "Internationalization",
									ja: "国際化",
									"zh-cn": "国际化",
								},
								href: `/${locale}/js/tutorial/beginner/internationalization/`,
							},
							{
								label: {
									"en-us": "Modules",
									ja: "モジュール",
									"zh-cn": "模块",
								},
								href: `/${locale}/js/tutorial/beginner/modules/`,
							},
						],
					},
					{
						label: {
							"en-us": "Intermediate",
							ja: "中級編",
							"zh-cn": "中级",
						},
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Advanced",
							ja: "上級編",
							"zh-cn": "高级",
						},
						isAccordion: true,
						children: [],
					},
				],
			},
			{
				label: {
					"en-us": "Reference",
					ja: "リファレンス",
					"zh-cn": "参考",
				},
				href: `/${locale}/js/reference/`,
				isLabel: true,
				children: [
					{
						label: {
							"en-us": "Built-in objects",
							ja: "組み込みオブジェクト",
							"zh-cn": "内置对象",
						},
						href: `/${locale}/js/reference/built-in-objects/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Expressions & Operators",
							ja: "式と演算子",
							"zh-cn": "表达式和运算符",
						},
						href: `/${locale}/js/reference/expressions-and-operators/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Statements & Declarations",
							ja: "文と宣言",
							"zh-cn": "语句和声明",
						},
						href: `/${locale}/js/reference/statements-and-declarations/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Functions",
							ja: "関数",
							"zh-cn": "函数",
						},
						href: `/${locale}/js/reference/functions/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Classes",
							ja: "クラス",
							"zh-cn": "类",
						},
						href: `/${locale}/js/reference/classes/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Regular expressions",
							ja: "正規表現",
							"zh-cn": "正则表达式",
						},
						href: `/${locale}/js/reference/regular-expressions/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Errors",
							ja: "エラー",
							"zh-cn": "错误",
						},
						href: `/${locale}/js/reference/errors/`,
						isAccordion: true,
						children: [],
					},
					{
						label: {
							"en-us": "Misc",
							ja: "その他",
							"zh-cn": "其他",
						},
						href: `/${locale}/js/reference/misc/`,
						isAccordion: true,
						children: [],
					},
				],
			},
		],
	},
];

// サイドバー・パンくずのメニュー（categories.js の分類に、既存の記事ツリーと下位分類の見出しを付ける）
export const buildMenu = (locale) => {
	const articles = buildArticleMenu(locale);
	return CATEGORIES.map((category) => {
		const href = `/${locale}/${category.path}/`;
		const base = articles.find((item) => item.href === href);
		// カテゴリーと同名の下位分類は、カテゴリー直下の既存コンテンツとして扱う
		const subcategoryLabels = category.subcategories
			.filter((sub) => sub.id !== category.id)
			.map((sub) => ({ label: sub.label, isLabel: true }));
		return {
			...base,
			label: category.label,
			href,
			children: [...(base?.children ?? []), ...subcategoryLabels],
		};
	});
};
