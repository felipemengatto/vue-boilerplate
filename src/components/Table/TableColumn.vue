<template>
    <div v-if="false">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'TableColumn',
        props: {
            classes: {
                default: '',
                required: false,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            value: {
                required: true,
                type: String
            },
        },
        inject: ['addColumn'],
        mounted() {
            this.addColumn(this);
        },
    }
</script>