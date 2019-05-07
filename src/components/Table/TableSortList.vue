<template>
    <small class="px-2" v-if="showDefaultIcon">
        <i class="fa fa-sort-amount-asc text-muted"></i>
    </small>
    <small class="px-2" v-else-if="showIconSortedColumn">
        <i class="fa fa-sort-asc text-muted" v-if="orderAscSelected"></i>
        <i class="fa fa-sort-desc text-muted" v-else></i>
    </small>
</template>

<script>
    export default {
        name: 'TableSortList',
        props: {
            activeColumn: {
                defaut: '',
                required: false,
                type: String
            },
            column: {
                required: true,
                type: String
            },
            orderByType: {
                required: true,
                type: String
            },
        },
        computed: {
            orderAscSelected() {
                return this.orderByType === 'ASC';
            },
            showDefaultIcon() {
                return !this.activeColumn;
            },
            showIconSortedColumn() {
                return this.column === this.activeColumn;
            }
        }
    }
</script>