<template>
    <div id="waline"></div>
</template>

<script lang="ts" setup>
import { init } from "@waline/client";

onMounted(() => {
    init({
        el: "#waline",
        serverURL: "https://waline-cc.kemiaosw.top/",
        reaction: true,
        search: true,
        dark: "html[class='dark-mode']",
        emoji: ["https://gcore.jsdelivr.net/gh/sooooooooooooooooootheby/pinkline_commit@v1.0.0/r1999"],
    });
});
</script>

<style lang="scss">
.wl-emoji {
    height: 2.4rem !important;
}
</style>
