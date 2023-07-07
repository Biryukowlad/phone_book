import { $userHost} from "./index";

export const create_phone = async () => {
    const {data} = await $userHost.post('api/create_phone')
    return data
}
export const add_phone = async () => {
    const {data} = await $userHost.post('api/add_phone')
    return data
}
export const delete_phone = async () => {
    const {data} = await $userHost.post('api/delete_phone')
    return data
}
export const get_phoneNumber_by_name = async () => {
    const {data} = await $userHost.post('api/get_phoneNumber_by_name')
    return data
}
export const get_name_byPhoneNumber = async () => {
    const {data} = await $userHost.post('api/get_name_byPhoneNumber')
    return data
}
export const liked_phone = async () => {
    const {data} = await $userHost.post('api/liked_phone')
    return data
}
export const sort_phones = async () => {
    const {data} = await $userHost.post('api/sort_phones')
    return data
}