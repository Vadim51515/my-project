
import { rerenderEntiteTree } from './../render';
let state = {
    profilePage: {
        postData: [
            { id: 0, message: "Hello Vadim, you is beatiful", like: 25 },
            { id: 1, message: " I dont want speek with you", like: 105 },
            { id: 1, message: "Всем привет, я русский", like: 228 },
            { id: 1, message: "Кто я?", like: 515 },
            { id: 1, message: "Я каменьщик работаю 3 дня", like: 123 },
        ],
        newPostText:"Im da da"
       
    },
    dialogsPage: {
        MessageData: [
            { id: 1, message: "Vadim hello" },
            { id: 2, message: "Andrey hello" },
            { id: 3, message: "Lia hello" },
            { id: 4, message: "Nasty hello" },
            { id: 5, message: "Valera hello" },
            { id: 6, message: "Sveta hello" },
        ],
        DialogsData: [
            { id: "vadim", name: "Vadim" },
            { id: "andrey", name: "Andrey" },
            { id: "lia", name: "Lia" },
            { id: "nasty", name: "Nasty" },
            { id: "valera", name: "Valera" },
            { id: "sveta", name: "Sveta" },
        ],
    },
    friends:{
        nameFriends:[
            {id: 1,name: "Vadim"},
            {id: 1,name: "Nikita"},
            {id: 1,name: "Filin"},
        ]
    }
}
window.state = state
export let addPost = () =>{
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        like:0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText =" "
    rerenderEntiteTree(state)
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText
    rerenderEntiteTree(state)
}
export default state