import { defineStore } from "pinia";

export const useChats = defineStore('chats', {
    state: () => ({
        chats: new Map(),
        username: 'kwabena',
    }),
    getters: {
        userChats: (state) => (userId: string) => {
            return state.chats.get(userId) || [];
        },
    },
    actions: {
        async fetchUserChats(userId: string) {
            try{
                const response = await fetch(`http://localhost:4850/user/${userId}`, { mode: 'no-cors' });
                const chats = await response.json();
                console.log("Chats", chats);
                this.chats.set(userId, chats);
            }catch(err){
                return {
                    error: "Failed to fetch user chats"
                }
            }
        },
        addMessage(userId: string, message: any) {
            this.chats.get(userId)?.push(message);
        }
    }
})