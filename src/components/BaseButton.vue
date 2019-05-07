<template functional>
    <button :class="`btn ${props.classes} text-uppercase`"
        @click="listeners.click"
        type="button">
        {{ props.text }}
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        functional: true,
        props: {
            classes: {
                default: 'btn-primary',
                required: false,
                type: String
            },
            text: {
                required: true,
                type: String
            },
        }
    }
</script>