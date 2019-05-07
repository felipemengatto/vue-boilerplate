<template>
    <div class="row py-3">
        <div class="col-12">
            <SearchBar />
        </div>
        <div class="col-12">
            <MovieList />
        </div>
    </div>
</template>

<script>
    import { MovieList, SearchBar } from '@containers';

    export default {
        name: 'Home',
        components: {
            MovieList,
            SearchBar
        }
    }
</script>