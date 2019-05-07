<template>
    <BaseAlert type="success" v-bind="$attrs"/>
</template>

<script>
    import BaseAlert from '@components/Alert/BaseAlert.vue';

    export default {
        name: 'AlertSuccess',
        inheritAttrs: false,
        components: {
            BaseAlert
        }
    }
</script>