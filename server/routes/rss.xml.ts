import RSS from "rss";

export default defineEventHandler(async (event) => {
    try {
        // 获取文章数据
        const posts = await queryCollection(event, "articles").all();

        // 创建 rss 对象
        const feed = new RSS({
            title: "克喵の小筑",
            site_url: "https://cc.kemiao.online",
            feed_url: `https://cc.kemiao.online/rss.xml`,
        });

        // 遍历获取的数据
        for (const post of posts) {
            feed.item({
                title: post.title,
                url: `https://cc.kemiao.online/${post.path}`,
                description: post.description,
                date: post.data,
            });
        }
        const feedString = feed.xml({ indent: true });
        event.node.res.setHeader("content-type", "text/xml");
        event.node.res.end(feedString);
    } catch (e) {
        return e;
    }
});
