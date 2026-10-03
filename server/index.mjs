globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.htaccess": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2a6-dxB8EYj6n2FBYo9G1bpcqG9ou4o\"",
		"mtime": "2026-10-03T17:39:08.504Z",
		"size": 678,
		"path": "../client/.htaccess"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1a66-XZlztOJKQPwdCSMjIGI6Sf9J/xw\"",
		"mtime": "2026-10-03T17:39:08.504Z",
		"size": 6758,
		"path": "../client/favicon.png"
	},
	"/assets/accordion-TjiXpKyu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3793-LC8riQNa/aekSJbIMmpYj7QHHoc\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 14227,
		"path": "../client/assets/accordion-TjiXpKyu.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"20a-Ugpe3xMPefxNwDXKW1NXG41QWp4\"",
		"mtime": "2026-10-03T17:39:08.507Z",
		"size": 522,
		"path": "../client/sitemap.xml"
	},
	"/assets/backseat-after-DPWktzt8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a9bf-4wvSPnywotZKf3h9PL4VfVeTgnE\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 108991,
		"path": "../client/assets/backseat-after-DPWktzt8.jpg"
	},
	"/og-image.jpg": {
		"type": "image/jpeg",
		"etag": "\"71484-eIEz9g2M1pHBj0ota3f/ZaOePLI\"",
		"mtime": "2026-10-03T17:39:08.507Z",
		"size": 464004,
		"path": "../client/og-image.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"48-XDT3lvvjm5oBBesZY9mooZmgU9I\"",
		"mtime": "2026-10-03T17:39:08.507Z",
		"size": 72,
		"path": "../client/robots.txt"
	},
	"/assets/console-after-D91gbHQK.jpg": {
		"type": "image/jpeg",
		"etag": "\"cd19-uoGxtI+KOa5qGeCRHymsbRtSLYg\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 52505,
		"path": "../client/assets/console-after-D91gbHQK.jpg"
	},
	"/assets/faq-DSNmyHG3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"472-b+TEidAHC0EgdbA/kMY7xLoFbmE\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 1138,
		"path": "../client/assets/faq-DSNmyHG3.js"
	},
	"/assets/gallery-BPvR1r57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d7-LQYTj/IeFK+w4JJKRYC5WsBWF4E\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 1751,
		"path": "../client/assets/gallery-BPvR1r57.js"
	},
	"/assets/CtaButtons-fi5E2DOm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f0-VvfLn1ze172ZJRffzLS7lTeWZeg\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 1008,
		"path": "../client/assets/CtaButtons-fi5E2DOm.js"
	},
	"/assets/backseat-before-BvsOFvlf.jpg": {
		"type": "image/jpeg",
		"etag": "\"24a64-Dmn9QXob1ac2X5aAZhSH6/adoV8\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 150116,
		"path": "../client/assets/backseat-before-BvsOFvlf.jpg"
	},
	"/assets/index-C9rOc14E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c541-wQZM6hBII1UpurU5ZTd9M0TqB6g\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 443713,
		"path": "../client/assets/index-C9rOc14E.js"
	},
	"/assets/pkg-full-CgR3iZEt.jpg": {
		"type": "image/jpeg",
		"etag": "\"19353-uLpqJeawZTuavuD7dyggqUAFuYE\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 103251,
		"path": "../client/assets/pkg-full-CgR3iZEt.jpg"
	},
	"/assets/pkg-exterior-DC8ptFJE.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e3a7-hgZAGS6tQIArwXQtHAwhLJM7pHQ\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 123815,
		"path": "../client/assets/pkg-exterior-DC8ptFJE.jpg"
	},
	"/assets/pkg-interior-DNx48Fou.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa57-PNqD23Q3IRC6ivKNYE/UVrgQ+BY\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 109143,
		"path": "../client/assets/pkg-interior-DNx48Fou.jpg"
	},
	"/assets/privacy-policy-QRmgMBEK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"913-bqilll45hyKUno3BAZF0PDOwDJE\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 2323,
		"path": "../client/assets/privacy-policy-QRmgMBEK.js"
	},
	"/assets/routes-Bua9nX-C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b97-KcqURNhSXjjRgtz1J16P5jA+cyk\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 11159,
		"path": "../client/assets/routes-Bua9nX-C.js"
	},
	"/assets/pkg-polish-XhICqg0B.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aadc-mwIj3SApNnMgLgW2QR2GydmHvfM\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 109276,
		"path": "../client/assets/pkg-polish-XhICqg0B.jpg"
	},
	"/assets/seat-after-pISZVsne.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f4ad-VaTtLsOlLi2vpWPdwB/7f7WQrAc\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 128173,
		"path": "../client/assets/seat-after-pISZVsne.jpg"
	},
	"/assets/hero-BSPPsB3v.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a4c4-IzR6OkjyZkjnKw4p1ttFQqJGn24\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 173252,
		"path": "../client/assets/hero-BSPPsB3v.jpg"
	},
	"/assets/car-sedan-PO93JbLO.jpg": {
		"type": "image/jpeg",
		"etag": "\"104f7-09AtUiI7D0/NrSRuC/quVIvh08w\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 66807,
		"path": "../client/assets/car-sedan-PO93JbLO.jpg"
	},
	"/assets/BeforeAfter-B_Zt7zRn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e4-DdvC6o5mhtB49tLaBTbQDtt1e2A\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 2020,
		"path": "../client/assets/BeforeAfter-B_Zt7zRn.js"
	},
	"/assets/car-crossover-o-xku2_u.jpg": {
		"type": "image/jpeg",
		"etag": "\"116b9-pqLV8uDE2PFQdHaKI7cRRyjw1hc\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 71353,
		"path": "../client/assets/car-crossover-o-xku2_u.jpg"
	},
	"/assets/car-suv-CjAWL-ue.jpg": {
		"type": "image/jpeg",
		"etag": "\"11fce-xZ3Xst45Mq+Mi6AFWNU+NBOGB6s\"",
		"mtime": "2026-10-03T17:39:07.823Z",
		"size": 73678,
		"path": "../client/assets/car-suv-CjAWL-ue.jpg"
	},
	"/assets/services-kqBjyWra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"992-Vz73bcGZSod3aNypMtNB98C3gXY\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 2450,
		"path": "../client/assets/services-kqBjyWra.js"
	},
	"/assets/styles-DcGTD_ZD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"148bb-chBxUJbqAGT9aEd88281LGcdHxg\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 84155,
		"path": "../client/assets/styles-DcGTD_ZD.css"
	},
	"/assets/sedan-after-BQ1P98GM.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a787-aI3axB5XivUzcVSjZCHeGGuqQLw\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 108423,
		"path": "../client/assets/sedan-after-BQ1P98GM.jpg"
	},
	"/assets/sedan-before-C12HxsdY.jpg": {
		"type": "image/jpeg",
		"etag": "\"24557-v4qHDKHsg0umg0V5mjtnVTjIjNY\"",
		"mtime": "2026-10-03T17:39:07.824Z",
		"size": 148823,
		"path": "../client/assets/sedan-before-C12HxsdY.jpg"
	},
	"/assets/sparkles-DPlIf1m7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-6+dFrrPaknz2HgcpKVRcC0F8n0M\"",
		"mtime": "2026-10-03T17:39:07.822Z",
		"size": 483,
		"path": "../client/assets/sparkles-DPlIf1m7.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j21Qvj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
