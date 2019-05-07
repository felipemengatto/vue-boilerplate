<template>
    <div class="input-group mb-3 shadow-sm">
        <div class="input-group-prepend"
            v-if="icon">
            <span class="input-group-text bg-white">
                <Icon :type="icon" />
            </span>
        </div>
        <input class="form-control"
            type="text"
            :placeholder="placeholder"
            :aria-label="placeholder"
            :value="value"
            @input="emitInputValue($event.target)">
        <slot name="input-append">
        </slot>
    </div>
</template>

<script>
    import Icon from '@components/Icon.vue';

    export default {
        name: 'BaseInput',
        components: {
            Icon
        },
        props: {
            icon: {
                default: '',
                required: false,
                type: String
            },
            placeholder: {
                default: '',
                required: false,
                type: String
            },
            type: {
                required: true,
                type: String
            },
            value: {
                default: '',
                required: false,
                type: String
            },
        },
        methods: {
            emitInputValue({ value }) {
                clearTimeout(this.debounce);

                this.debounce = setTimeout(() => {
                    this.$emit('input', value);
                }, 300);
            }
        }
    }
</script>