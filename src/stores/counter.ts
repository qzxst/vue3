// @ts-ignore
import {computed, ref} from 'vue'
// @ts-ignore
import {defineStore} from 'pinia'

const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return {count, doubleCount, increment}
})
const x = () => {
    return 1
}
export {useCounterStore, x}
