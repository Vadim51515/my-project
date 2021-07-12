import usersReducer, { InitialStateType } from "./Users_Reducer"
import { actions } from './Users_Reducer';


    let state:InitialStateType = {
        users: [
            {
            id:1,
            name:"Vadim",
            status:'sdsd',
            followed:false,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:2,
            name:"Nastya",
            status:'lslll',
            followed:false,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:3,
            name:"Karina",
            status:'pspppl',
            followed:true,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:4,
            name:"Sveta",
            status:'ak11',
            followed:true,
            photos:{
                small:null,
                large:null
            }
        },
    ],
        pageSize: 5,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
    beforeEach(() => {
        state = {
            users: [
            {
            id:1,
            name:"Vadim",
            status:'sdsd',
            followed:false,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:2,
            name:"Nastya",
            status:'lslll',
            followed:false,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:3,
            name:"Karina",
            status:'pspppl',
            followed:true,
            photos:{
                small:null,
                large:null
            }
        },
        {
            id:4,
            name:"Sveta",
            status:'ak11',
            followed:true,
            photos:{
                small:null,
                large:null
            }
        },
    ],
        pageSize: 5,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
    })
   test("follow success", () => {

   const newState =  usersReducer(state, actions.followUnfollowFlouSuccess(2, true))

   expect(newState.users[0].followed).toBeFalsy()
   expect(newState.users[1].followed).toBeTruthy()
})
test("unfollow success", () => {

    const newState =  usersReducer(state, actions.followUnfollowFlouSuccess(3, false))
 
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()
 })