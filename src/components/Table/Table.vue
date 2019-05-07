<template>
    <div class="c-table">
        <div class="table text-center" v-if="listItems.length > 0">
            <div class="list-group-item text-important font-weight-bold shadow-sm z-index-1">
                <div class="row align-items-center">
                    <slot name="header">
                    </slot>
                    <div class="col cursor-pointer"
                        :class="item.classes"
                        @click="sortListByColumn(item.value)"
                        v-for="(item, index) in columns"
                        :key="index">
                            {{ item.name }}
                            <TableSortList
                                :column="item.value"
                                :active-column="columnSelected"
                                :order-by-type="orderByType" />
                    </div>
                </div>
            </div>
            <paginate class="shadow-sm"
                name="list"
                :list="listItemsSorted"
                :per="limitPerPage">
                <div class="c-table-item list-group-item"
                    v-for="(item, index) in paginated('list')" :key="index">
                    <slot name="body" :item="item">
                    </slot>
                </div>
            </paginate>
            <paginate-links for="list"
                :limit="limitPageLinks"
                :hide-single-page="true" />
        </div>
    </div>
</template>

<script>
    import TableSortList from './TableSortList.vue';

    export default {
        name: 'Table',
        components: {
            TableSortList
        },
        props: {
            limitPerPage: {
                default: 30,
                required: false,
                type: Number
            },
            limitPageLinks: {
                default: 5,
                required: false,
                type: Number
            },
            listItems: {
                required: true,
                type: Array
            }
        },
        provide () {
            return {
                addColumn: this.addColumn
            }
        },
        data() {
            return {
                columns: [],
                columnSelected: null,
                orderByType: 'ASC',
                paginate: ['list']
            }
        },
        computed: {
            listItemsSorted() {
                return this.orderBy(
                            this.listItems,
                            this.columnSelected,
                            this.convertOrderByToNumber(this.orderByType)
                        );
            }
        },
        beforeMount() {
            this.checkExistDependencies();
        },
        methods: {
            addColumn(item) {
                this.$slots.header.indexOf(item.$vnode);
                this.columns.push(item);
            },
            convertOrderByToNumber(type) {
                if (type === 'DESC') {
                    return -1;
                }
                return 1;
            },
            checkExistDependencies() {
                if (!this.orderBy) {
                    console.error('Está faltando o plugin externo: "Vue2Filters"');
                }

                if (!this.paginate || !this.paginated) {
                    console.error('Está faltando o plugin externo: "VuePaginate"');
                }

            },
            sortListByColumn(column) {
                this.columnSelected = column;

                switch (this.orderByType) {
                    case 'ASC':
                        this.orderByType = 'DESC';
                        break;
                    default:
                        this.orderByType = 'ASC';
                        break;
                }

            },
        }
    }

</script>

<style lang="scss" scoped>

    .c-table {
        &-item {
            &:first-child {
                border-radius: 0;
            }
        }
    }

    .paginate-links {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px 0 0 0;

        /deep/ li.number {
            background: var(--important);
            border-radius: 2px;
            color: var(--white);
            cursor: pointer;
            height: 29px;
            margin: 2px;
            width: 29px;
            > a {
                align-items: center;
                display: flex;
                height: 100%;
                justify-content: center;
                width: 100%;
            }
            &.active {
                background: var(--primary);
                font-weight: bold;
            }
        }

        /deep/ li.ellipses {
            color: #FFF;
            position: relative;
            margin: 0 10px 0 5px;
            ::before {
                content: '...';
                top: 0;
                left: 0;
                color: #000;
                position: absolute;
            }
        }
    }
</style>