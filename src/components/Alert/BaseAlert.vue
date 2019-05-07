<template>
    <div :class="`alert alert-${type} text-center`">
        <Icon v-if="icon" :type="icon" />
        <span class="ml-2">{{ text }}</span>
    </div>
</template>

<script>
    import Icon from '@components/Icon.vue';

    export default {
        name: 'BaseAlert',
        components: {
            Icon
        },
        props: {
            icon: {
                default: '',
                required: false,
                type: String
            },
            text: {
                required: true,
                type: String
            },
            type: {
                required: true,
                type: String
            }
        }
    }
</script>