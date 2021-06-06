import * as  axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "244e8c1d-10a7-4440-8817-d11bf9e5cf49"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        })
            .then(response => {
                return response.data
        
            })
    },
    unfollow(id){
       return instance.delete(`follow/${id}`,{})
        .then(response => {
            return response.data.resultCode
        })
    },
    follow(id){
        return instance.post(`follow/${id}`,{})
         .then(response => {
             return response.data.resultCode
         })
    },
    getProfile(userID){
        // console.error("Используется старый метод");
        return profileAPI.getProfile(userID)
    }
} 

export const profileAPI = {
    getProfile(userID){
        return instance.get(`profile/${userID}`)
        .then(response => {
            return response
        })
    },
    getStatus(userID){
        
        return instance.get(`profile/status/${userID}`)
        
        .then(response => {
            
            return response
        })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
        .then(response => {
            return response
        })
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`,formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
        .then(response => {
            return response
        })
    }
}




export const authAPI ={
    me(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email,password,rememberMe, captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

export const securityAPI ={
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    },
}
