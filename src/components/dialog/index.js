import Vue from 'vue'
import Dialog from './Dialog'

function open(propsData) {
    const DialogComponent = Vue.extend(Dialog)
    return new DialogComponent({
        el: document.createElement('div'),
        propsData
    })
}

export default {
    alert(params) {
        const defaultParam = {
            canCancel: false
        }
        const propsData = Object.assign(defaultParam, params)
        return open(propsData)
    }
}