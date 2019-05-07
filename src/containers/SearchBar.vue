<template>
    <BaseInput
        icon="fa-search"
        placeholder="Your Movie Name"
        v-model.trim="search"
        type="text">
        <template v-slot:input-append>
            <div class="input-group-append">
                <BaseButton
                    classes="btn-primary c-btn-search"
                    text="Search"
                    :disabled="disableButton"
                    @click="setSearchValue(search)"/>
            </div>
        </template>
    </BaseInput>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import { EXAMPLE } from '@modules';

    import { BaseButton, BaseInput } from '@components';

    export default {
        name: 'SearchBar',
        components: {
            BaseButton,
            BaseInput
        },
        computed: {
            ...mapState(EXAMPLE, [
                'searchValue'
            ]),
            disableButton() {
                return !this.search;
            },
            search: {
                get() {
                    return this.searchValue;
                },
                set(value) {
                    this.setSearchValue(value);
                }
            }
        },
        methods: {
            ...mapActions(EXAMPLE, [
                'setSearchValue'
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .c-btn-search {
        position: relative;

        &::before {
            content: '';
            background: var(--white);
            display: flex;
            z-index: 1001;
            position: absolute;
            width: 10px;
            height: 8px;
            transform: rotate(90deg);
            left: -2px;
            top: 42%;
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
    }
</style>
