import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            books:[
                {
                    title:'book 1 title',
                    bookName:"book 1",
                    imgSrc: 'img5.jpg'
                },
                {
                    title:'book 2 title',
                    bookName:"book 2",
                    imgSrc: '../assets/images/img2.jpg'
                },
                {
                    title:'book 3 title',
                    bookName:"book 3",
                    imgSrc: 'assets/images/img3.jpg'
                }
        ],
            toggleBooks:"hide"
        }
    }
    ,
    methods:{
        changeTitle(){
            this.title ="Every thing is fine Status code ",
            this.error = 202
        },
        hideBooks(){
            this.showBooks = !this.showBooks;
            if(this.showBooks == true)
            {
                this.toggleBooks = "hide";
            }
            else
            {
                this.toggleBooks = "show";
            }
            
        }
    }
}).mount('#app');

//app.use(router)

//app.mount('#app');
