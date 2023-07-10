import { $userHost} from "./index";

export const create_phone = async (phone_num_person, name_person, islike_person) => {
    const {data} = await $userHost.post('api/phone/create_phone', {phone_num_person, name_person, islike_person})
    return data.phone
}
export const add_phone = async () => {
    const {data} = await $userHost.post('api/phone/add_phone')
    return data
}
export const get_all_phones = async () => {
    const {data} = await $userHost.get('api/phone/get_all_phones')
    return data.phones
}
export const delete_phone = async (id) => {
    const {data} = await $userHost.delete('api/phone/delete_phone/'+ id, {id})
    return data
}
export const get_phoneNumber_by_name = async () => {
    const {data} = await $userHost.post('api/phone/get_phoneNumber_by_name')
    return data
}
export const get_name_byPhoneNumber = async () => {
    const {data} = await $userHost.post('api/phone/get_name_byPhoneNumber')
    return data
}
export const liked_phone = async (id) => {
    const {data} = await $userHost.put('api/phone/liked_phone/'+ id, {id})
    return data
}
export const unliked_phone = async (id) => {
    const {data} = await $userHost.put('api/phone/unliked_phone/'+ id, {id})
    return data
}
export const sort_phones = async () => {
    const {data} = await $userHost.post('api/phone/sort_phones')
    return data
}