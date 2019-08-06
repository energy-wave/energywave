<template>
    <section>
        <div>11111</div>
    </section>
</template>
<script>
    export default {
        name: "p2",
        data() {
            return {
                songId: ""
            };
        },
        created() {
            this.text();
        },
        methods: {
            text() {
                console.log(this.songId);
            }
        }
    };
</script>
<style lang="less" scoped>
</style>
