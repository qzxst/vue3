import { defineStore } from 'pinia'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
interface UserState {
  id: number
  name: string
  age: number
}

const useUserStore = defineStore('user', () => {
  const users = reactive<UserState[]>([])
  const getInfo = () => {
    axios.get('../api/user.json').then((res) => {
      console.log(res.data.data)
      users.push(...res.data.data)
    })
  }
  return { users, getInfo }
})

export { useUserStore }
