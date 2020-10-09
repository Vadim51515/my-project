import profileReducer from './Profile_Reducer';
import dialogsReducer from './Dialogs_Reducer';
import friendsReducer from './Friends_Reducer';
let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 0, message: "Hello Vadim, you is beatiful", like: 25 },
                { id: 1, message: " I dont want speek with you", like: 105 },
                { id: 1, message: "Всем привет, я русский", like: 228 },
                { id: 1, message: "Кто я?", like: 515 },
                { id: 1, message: "Я каменьщик работаю 3 дня", like: 123 },
            ],
            newPostText:"Im da da da"
           
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
            newMessageText:"da da i",
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
    },
    _callSubscriber(){
        console.log("123");
    },

    getState(){
        return this._state
    },
    subcribe (observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friends = friendsReducer(this._state.friends, action)

        this._callSubscriber(this._state)
    }
}



export default store
window.store = store