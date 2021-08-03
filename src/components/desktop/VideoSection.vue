<template>
  <div>
    <router-link class="button__back" to="/search">
            <div class="button__svg"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z" fill="#292941" fill-opacity="0.5"/></svg></div>
            <p class="button__back-text">Назад</p>
      </router-link>
    <Menu />
    <div class="header" v-bind:block="block">
        <div class="header__about">
        <h2 class="header__title">{{block.title}}</h2>
        <img class="header__svg" src="@/assets/MaskGroup.svg" v-scroll="handleScroll"/>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7784 8.29443L11.9172 0.27244C11.6933 0.0110899 11.3503 -0.0709494 11.0517 0.0644044C10.7519 0.201064 10.5555 0.527915 10.5555 0.891542V4.75413H10.2917C4.61704 4.75413 0 9.95241 0 16.3415V18.1241C0 18.5376 0.258607 18.8823 0.616365 18.9763C0.674542 18.9928 0.732525 19 0.790509 19C1.08932 19 1.37537 18.8026 1.51356 18.4925C2.99775 15.1494 5.98178 13.0732 9.30153 13.0732H10.5555V16.9355C10.5555 17.2994 10.7519 17.6262 11.0517 17.7616C11.3483 17.8982 11.6933 17.8151 11.9172 17.5535L18.7784 9.53155C19.0739 9.18577 19.0739 8.64152 18.7784 8.29443Z" fill="#292941"/>
        </svg>
        </div>
        <p class="header__text">{{block.text}}</p>
    </div>
    <div class="compilation__content">
            <div class="video__content" v-for="card of cards" :key="card.id" v-bind:card="card">
            <img class="video__img" :src="card.url">
                <div class="content__counter" v-bind:class="{active: card.paid === 'true'}">
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6087 4.33242C9.13043 4.62912 9.13043 5.37088 8.6087 5.66758L1.17391 9.89558C0.652174 10.1923 -4.30455e-07 9.8214 -4.04447e-07 9.228L-3.38356e-08 0.772003C-7.82773e-09 0.1786 0.652174 -0.192277 1.17391 0.104424L8.6087 4.33242Z" fill="white"/></svg>
                    <p class="video__counter">{{card.views}}</p>
                </div>
                <div class="video__paid" v-bind:class="{active: card.paid === 'false'}">
                    <img class="video__paid-img" :src="card.avatar">
                </div>
            </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "./Menu.vue"
import Footer from "./Footer.vue"
import data from "../../data/data.json"

export default {
    props: ['block'],
    components: {
        Menu,
        Footer,
    },
    data() {
        return {
        cards: data,
        };
    },
    methods: {
    handleScroll: function (evt, el) {
        //   const header = this.$el.querySelector(".header");
        const title = this.$el.querySelector(".header__title")
        const text = this.$el.querySelector(".header__text")
        if (window.scrollY > 10) {
            el.setAttribute("style", "opacity: 1; transform: translate3d(0, 0, 0)")
            title.setAttribute("style", "opacity: 0; transform: translate3d(0, 0, 0)");
            text.setAttribute("style", "display: none")
            // this.$refs.header.classList.add('header__narrow')
        }
        if (window.scrollY < 10) {
            el.setAttribute("style", "opacity: 0; transform: translate3d(0, 0, 0)")
            title.setAttribute("style", "opacity: 1; transform: translate3d(0, 0, 0)");
            text.setAttribute("style", "display: block")
            // this.$refs.header.classList.remove('header__narrow')
        }
    },
  },
};
</script>

<style>
	.swiper-container{
		width: 100%;
        display: flex;
	}
</style>

<style lang='scss' scoped>
    .compilation {
        margin: 0;
        padding: 0;
        width: 100%;
        margin: 0 auto;
        background: #fff;

        .video__content{
            position: relative; 
            display: flex;
            margin-right: 4px; 
            margin-bottom: 4px;
            width: calc(25% - 3px);
            height: 346px;
            position: relative;
            overflow: hidden;
        }
        .video__img{
            max-width: 100%;
            height: auto;
            background-size: cover;
            object-fit: cover;
            background-repeat: no-repeat; 
        }
        .video__content:nth-child(4n){
            margin-right: 0; 
        }
        .content__counter{
            display: none;
            bottom: 20px;
            left: 20px;
            display: flex;
            align-items: center;
        }
        .video__counter{
            color: #fff;
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            margin: 0;
            margin-left: 4.6px;
        }
        .video__paid{
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            width: 100%;
            height: 100%;
            display: none;
            top: 0;
            left: 0;
            justify-content: center;
            align-items: center;
        }
        .video__paid-img{
            border: 3.5px solid #FFFFFF;
            width: 69px;
            height: 69px;
            border-radius: 50%;
        }
    }
    .button__back {
        position: absolute;
        top: 95px;
        left: 27px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: rgba(41, 41, 65, 0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        border: none;
        background: #e5e5e5;
        text-decoration: none;
    }
    .button__back-text{
        margin: 0;
    }
    .button__svg{
        margin-right: 10px;
    }
    .header__svg{
        position: absolute;
        top: 0;
        left: calc(50% - 22.5px);
        transition: .5s all cubic-bezier(0.39, 0.575, 0.565, 1);
        opacity: 0;
    }
    .active{
        display: flex;
        position: absolute;
    }
	.header {
		margin: 0 auto;
		padding: 114px 45px 50px;
		max-width: 850px;
		background: #fff;
		position: fixed;
		max-width: 850px;
		width: 100%;
		top: 0;
		left: calc(50% - 470px);
		z-index: 5;
        
        .header__about {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
        .header__title {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            color: #292941;
            margin: 0;
            transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            opacity: 1;
        }

        .header__text {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #292941;
            opacity: 0.5;
            margin: 18px 0 0;
        }
        .header__svg {
            position: absolute;
            top: 0;
            left: calc(50% - 22.5px);
            transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            opacity: 0;
            z-index: 15;
        }
        .header__narrow {
            padding: 81px 45px 0;
        }
	}
</style>
