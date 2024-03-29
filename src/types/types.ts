import { AppStateType } from "../redux/redux-store"

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotosType
}
export type GetStateType = () => AppStateType

export type PhotosType = {
    small: string | null
        large: string | null
}

export type UserProfileType = {
    userId: number 
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe:string
}
export type ProfileType = {
    userId: number 
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe:string
}
export type ContactsType = {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
}
export type GetItemsType = {
    items: Array<UserType>
    totalCount:number
    error:string

}
