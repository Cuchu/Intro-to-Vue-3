const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {id: 's', desc: 'small'},
                {id: 'm', desc: 'medium'},
                {id: 'l', desc: 'large'},
                {id: 'xl', desc: 'extra large'}
            ],
        }
    }
})
