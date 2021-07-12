import axios from 'axios';
import { GetItemsType, UserProfileType } from '../types/types';


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "244e8c1d-10a7-4440-8817-d11bf9e5cf49"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1, term:string = '', friend: null | boolean ) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null? '' : `&friend=${friend}`) , {
        }).then(response => {
                return response.data
            })                  
    },                  
    unfollow(id:number){                  
       return instance.delete<UpdateStatusType>(`follow/${id}`,{})
        .then(response => {
            return response.data
        })
    },                  
    follow(id:number){
        return instance.post<UpdateStatusType>(`follow/${id}`,{})
         .then(response => {
             return response.data
         })
    },
} 

export const profileAPI = {
    getProfile(userID: number| null ){
        return instance.get<UserProfileType>(`profile/${userID}`)
        .then(response => {
            return response.data
        })
    },
    getStatus(userID:number){
        return instance.get<string>(`profile/status/${userID}`)
        .then(response => {
            return response.data
        })
    },
    updateStatus(status:string){
        return instance.put<UpdateStatusType>(`profile/status`, {status:status})
        .then(response => {
            return response.data
        })
    },
    savePhoto(photoFile:any){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<SavePhotoType>(`profile/photo`,formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data
        })
    },
    saveProfile(profile : UserProfileType){
        return instance.put<SaveProfileType>(`profile`, profile)
        .then(response => {
            return response.data
        })
    }
}

export type UpdateStatusType = {
    resultCode:ResultCodeEnum
    messages:Array<string>
    data:{}
}
type SavePhotoType = {
    data:{
        photos:{
            small:string
            large:string
        }
    }
    resultCode:ResultCodeEnum
    messages:Array<string>
}
type SaveProfileType = {
    resultCode:ResultCodeEnum
    messages:Array<string>
    data:{}
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}


type MyResponseType = {
    data:{
        id:number
        email:string
        login:string
    }
    resultCode:ResultCodeEnum
    messages:Array<string>
}
type LoginResponseType = {
    data:{
        userId:number
    }
    resultCode:ResultCodeEnum | ResultCodeForCaptchaEnum
    messages:Array<string>
}
type LogouResponseType = {
    resultCode:ResultCodeEnum
}
export const authAPI ={
    me(){
        return instance.get<MyResponseType>(`auth/me`).then(res=>res.data)
    },
    login(email:string,password:string,rememberMe = false, captcha: null | string = null){
        return instance.post<LoginResponseType>(`auth/login`, {email,password,rememberMe, captcha}).then(res=>res.data)
    },
    logout(){
        return instance.delete<LogouResponseType>(`auth/login`).then(res=>res.data)
    }
}
type GetCaptchaUrlType = {
    url:string
}
export const securityAPI ={
    getCaptchaUrl(){
        return instance.get<GetCaptchaUrlType>(`security/get-captcha-url`).then(res=>res.data);
    },
}
