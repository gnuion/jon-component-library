import { ref } from "vue"
const focus = ref()
const isOpen = ref(false)

export default function useGalleryStore() {
    function setFocus(idx: number) {
        focus.value = idx
        isOpen.value = true
        console.log(focus.value)
    }

    function close() {
        isOpen.value = false
    }
    return {setFocus, focus, isOpen, close}
}