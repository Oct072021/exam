<template>
    <div>
        <item_container father-component="home"></item_container>
    </div>
</template>

<script>
    import item_container from "@/components/item_container";

    export default {
        name: "home",
        components: {
            item_container
        }
    }
</script>

<style lang="less" scoped>

</style>