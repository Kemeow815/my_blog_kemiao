export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            title: "克喵の小筑",
            htmlAttrs: {
                lang: "zh-cn",
            },
            link: [{ rel: "icon", type: "image/x-icon", href: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/kemeow815@avatar.png" }],
            meta: [
                { name: "description", content: "去码头整点薯条" },
                { name: "ogDescription", content: "去码头整点薯条" },
                { name: "ogImage", content: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/back2.jpg" },
            ],
        },
    },

    modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxt/icon", "nuxt-module-feed"],

    css: ["~/assets/base.scss", "~/assets/theme.scss", "~/assets/sspai.scss", "~/assets/waline.css"],

    nitro: {
        prerender: {
            routes: ["/rss.xml"],
        },
    },
});
