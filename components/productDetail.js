app.component('product-detail', {
    template: 
    /*html*/
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    props: {
        details: { type: Array, default: () => [] }
    },
    data() {
        return {}
    }

})