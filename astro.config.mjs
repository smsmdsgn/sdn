// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import directives from "./src/markdown/directives.js";
import sourceNotice from "./src/markdown/sourceNotice.js";
import { rename, rm } from "node:fs/promises";

const LOCALES = ["en-us", "ja", "zh-cn"];

// 言語別の 404 ページ（src/pages/{locale}/404.astro）を /{locale}/404.html に置く。
// 階層ごとの 404.html に対応したホスティング（Cloudflare Pages など）向け。
// directory 形式のビルドでは /{locale}/404/index.html になるため、ビルド後に移す
const localized404 = {
	name: "localized-404",
	hooks: {
		"astro:build:done": async ({ dir }) => {
			for (const locale of LOCALES) {
				const built = new URL(`${locale}/404/`, dir);
				await rename(new URL("index.html", built), new URL(`${locale}/404.html`, dir));
				await rm(built, { recursive: true });
			}
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321",
	output: "static",
	integrations: [mdx(), localized404],
	devToolbar: { enabled: false },
	markdown: {
		processor: satteri({
			features: { directive: true },
			mdastPlugins: [directives, sourceNotice],
		}),
		shikiConfig: {
			themes: {
				light: "one-light",
				dark: "one-dark-pro",
			},
		},
	},
	i18n: {
		locales: LOCALES,
		defaultLocale: "en-us",
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
