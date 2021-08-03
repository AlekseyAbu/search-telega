<template>
	<section class="compilation">
		<div class="header">
            <router-link class="header__button-back" to="/search">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.52543 11.6569L0.43426 6.56569C0.12184 6.25327 0.121841 5.74674 0.43426 5.43432L5.52543 0.343151C5.83785 0.0307311 6.34438 0.0307312 6.6568 0.343151C6.96922 0.655571 6.96922 1.1621 6.6568 1.47452L2.13132 6.00001L6.6568 10.5255C6.96922 10.8379 6.96922 11.3444 6.6568 11.6569C6.34438 11.9693 5.83785 11.9693 5.52543 11.6569Z" fill="black" fill-opacity="0.9"/></svg><p class="header__button-text">Назад</p>
            </router-link>
            <img class="header__svg" src="@/assets/MaskGroup.svg" v-scroll="handleScroll">
            <button class="header__button-forward">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path d="M16.8017 7.42133L10.6627 0.243762C10.4625 0.0099225 10.1555 -0.063481 9.88833 0.057625C9.62011 0.179899 9.44441 0.472345 9.44441 0.797695V4.25369H9.20836C4.13103 4.25369 0 8.90479 0 14.6213V16.2163C0 16.5863 0.231385 16.8947 0.551485 16.9788C0.603537 16.9936 0.655417 17 0.707297 17C0.974652 17 1.23059 16.8234 1.35424 16.5459C2.6822 13.5547 5.35211 11.697 8.32242 11.697H9.44441V15.1528C9.44441 15.4784 9.62011 15.7708 9.88833 15.8919C10.1538 16.0142 10.4625 15.9398 10.6627 15.7058L16.8017 8.52823C17.0661 8.21884 17.0661 7.73189 16.8017 7.42133Z" fill="#292941"/></g></svg>
            </button>
        </div>
		<div class="compilation__about">
			<h2 class="compilation__title">{{block.title}}</h2>
			<p class="compilation__text">{{block.text}}</p>
		</div>
		<div class="compilation__content">
            <div class="video__content"  v-for="card of cards" :key="card.id" v-bind:card="card">
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
	</section>
</template>

<script>
import data from "../../data/data.json";
import blocks from '../../data/blocks.json';

export default {
    props: ['block'],
	data() {
		return {
			cards: data,
		};
	},
    methods: {
        handleScroll: function (evt, el) {
        console.log(window.scrollY)
        if (window.scrollY > 100) {
            el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, 0, 0)'
            )
        }
        if(window.scrollY < 100){
             el.setAttribute(
            'style',
            'opacity: 0; transform: translate3d(0, 0, 0)'
            )
        }
        }
    }
};
</script>

<style lang='scss' scoped>
	section {
		margin: 0;
		padding: 0;
	}
	.compilation {
		margin: 0;
		padding: 0;
		width: 100%;
		margin: 0 auto;
	}
	.compilation__about {
		margin: 0 auto;
		padding: 62px 23px 30px;
		max-width: 554px;
		width: calc(100% - 46px);
        .compilation__title {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #292941;
            margin: 0 0 11px;
        }

        .compilation__text {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 135%;
            color: #292941;
            opacity: 0.5;
            margin: 0;
        }
	}
	.compilation__content {
		display: flex;
		flex-wrap: wrap;
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
        .video__content{
            position: relative; 
            display: flex;
            margin-right: 1px; 
            width: calc(100% / 3 - 1px);
            /* padding-bottom: 15%; */
            height: 173px;
            position: relative;
            overflow: hidden;
        }
        .video__content:nth-last-of-type{
            margin-right: 0; 
        }
        .video__img{
            max-width: 100%;
            height: 100%;
            background-size: cover;
            object-fit: cover;
            background-repeat: no-repeat; 
        }
        .content__counter{
            position: absolute;
            bottom: 7px;
            left: 7px;
            display: flex;
            align-items: center;
        }
        .video__counter{
            color: #fff;
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
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
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
	}
	.swiper-slide{
		display: flex;
	}
    .header{
        max-width: 554px;
        width: calc(100% - 46px);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 10px 23px 8px;
        z-index: 10;
        background: #fff;
        .header__button-back{
            border: none;
            background: #fff;
            color: rgba(0, 0, 0, 0.9);
            text-decoration: none;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .header__button-text{
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            margin: 0 0 0 11px;
        }
        .header__button-forward{
            border: none;
            background: #fff;
        }
        .header__svg{
            transition: .5s all cubic-bezier(0.39, 0.575, 0.565, 1);
            opacity: 0;
        }	
    }
    .active{
        display: flex;
        position: absolute;
    }
</style>