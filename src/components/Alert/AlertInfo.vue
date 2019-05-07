<template>
    <BaseAlert type="info" v-bind="$attrs"/>
</template>

<script>
    import BaseAlert from '@components/Alert/BaseAlert.vue';

    export default {
        name: 'AlertInfo',
        inheritAttrs: false,
        components: {
            BaseAlert
        }
    }
</script>