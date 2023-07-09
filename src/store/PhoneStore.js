import {makeAutoObservable} from "mobx";

export default class PhoneStore {
    constructor() {
        this._phones = []
        makeAutoObservable(this)
    }
    setPhones(phones) {
        this._phones = phones
    }
    get phones() {
        return this._phones
    }
}