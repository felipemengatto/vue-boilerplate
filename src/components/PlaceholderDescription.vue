<template>
    <div class="row p-4">
        <div class="col">
            <div class="placeholder-cube-lg"></div>
        </div>
        <div class="col">
            <PlaceholderList />
        </div>
    </div>
</template>

<script>
    import { PlaceholderList } from '@components';

    export default {
        name: 'PlaceholderDescription',
        components: {
            PlaceholderList
        }
    }
</script>