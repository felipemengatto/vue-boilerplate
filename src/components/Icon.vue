<template functional>
    <i :class="`fa ${props.type}`"></i>
</template>

<script>
    export default {
        name: 'Icon',
        functional: true,
        props: {
            type: {
                required: true,
                type: String
            }
        }
    }
</script>