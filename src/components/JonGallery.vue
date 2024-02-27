<template>
    <div :class="[colors, shape].join(' ')">
        <div v-for="image, key, _ in props.images" class="hover:cursor-pointer pt-3 pr-3"
            @click="focus = key; setIsOpen(true)">
            <img :src="image.thumbnail" class="w-full object-cover h-full rounded-lg" />
        </div>
    </div>
    <Teleport v-if="isOpen" to="body">
        <div @click="setIsOpen(false)" class="fixed top-0 left-0 inset-0 justify-center p-6" :class="colors">
            <div class="relative rounded-lg overflow-hidden flex justify-center h-full w-full">
                <button @click=""
                    class="absolute top-2 right-2 text-2xl bg-black/40 w-10 h-10 flex items-center justify-center rounded-full">&#x2715;</button>
                <img  :src="images[focus].original" :placeholder="images[focus].thumbnail"
                    class="object-contain  rounded-lg" @click.stop="" />
            </div>
        </div>
    </Teleport>
</template>
<style scoped>
my-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
const focus = ref()
const isOpen = ref(false)

function setIsOpen(status: boolean) {
    isOpen.value = status
    if (status) {
        document.body.style.height="100%"
        document.body.style.overflow="hidden"
    } else {
        document.body.style.height=""
        document.body.style.overflow=""
    }
}

const props = defineProps<{
    images: {
        [key: string]: {
            thumbnail: string
            original: string
        }
    }
}>()
const colors = "text-light-on-background dark:text-dark-on-background bg-light-background dark:bg-dark-background"
const shape = "columns-[300px] gap-0 pl-3 pb-3"



</script>


