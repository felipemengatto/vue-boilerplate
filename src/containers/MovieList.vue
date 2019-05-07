<template>
    <PlaceholderList v-if="loading" />
    <Table
        v-else-if="movies.length"
        :list-items="movies"
        :limit-per-page="5">
        <template v-slot:header>
            <TableColumn
                name="Title"
                value="title" />
            <TableColumn
                name="Year"
                value="year" />
            <TableColumn
                classes="d-none d-sm-block"
                name="Genre"
                value="genre" />
        </template>
        <template v-slot:body="{ item }">
            <div class="row align-items-center text-secondary">
                <div class="col">
                    <BaseButton
                        classes="btn-link"
                        @click="showModal(item.imdbid);"
                        :text="item.title" />
                </div>
                <div class="col">
                    {{ item.year }}
                </div>
                <div class="col d-none d-sm-block">
                    {{ item.genre }}
                </div>
            </div>
        </template>
    </Table>
    <AlertInfo
        v-else-if="showAlertInfo"
        icon="fa-info-circle"
        text="It's nothing other than that name :(" />
    <AlertSuccess
        v-else
        icon="fa-video-camera"
        text="Here you find all about your favorite movies!" />
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    import { EXAMPLE } from '@modules';

    import { AlertInfo, AlertSuccess, BaseButton, PlaceholderList, Table, TableColumn } from '@components';
    import { MovieDescription } from '@containers';

    export default {
        name: 'MovieList',
        components: {
            AlertInfo,
            AlertSuccess,
            BaseButton,
            MovieDescription,
            PlaceholderList,
            Table,
            TableColumn
        },
        computed: {
            ...mapState(EXAMPLE, [
                'loading',
                'movies',
                'searchValue'
            ]),
            showAlertInfo() {
                return this.searchValue && !this.movies.length;
            }
        },
        methods: {
            showModal(movieId) {
                this.$modal.show(MovieDescription,
                    {
                        movieId,
                    }, {
                        adaptive: true,
                        height: 'auto',
                        maxWidth: 650,
                        scrollable: true,
                        width: '90%'
                    },
                );
            },
        }
    }
</script>