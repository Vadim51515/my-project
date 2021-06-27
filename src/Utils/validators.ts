export type FiledValidatorType = (value:string) => string | undefined 
export const required = (value:string):string | undefined =>{
    if (value) return undefined
    return'Field is required'
}
export const maxLengthCreator = (maxLength:number):FiledValidatorType => value =>{
    if(value.length > maxLength) return `Max length is ${maxLength} character`
    return undefined
}
