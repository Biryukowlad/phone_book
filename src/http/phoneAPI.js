import { $userHost} from "./index";

export const create_phone = async (new_phone) => {
    const {data} = await $userHost.post('api/phone/create_phone', new_phone)
    return data.phone
}
export const get_all_phones = async () => {
    const {data} = await $userHost.get('api/phone/get_all_phones')
    return data.phones
}
export const delete_phone = async (id) => {
    const {data} = await $userHost.delete('api/phone/delete_phone/'+ id, {id})
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