<template>
	<div>
		<video-section-desktop v-if="true"></video-section-desktop>
		<video-section-mobile v-else></video-section-mobile>
	</div>
</template>

<script>
// import Header from "../components/HeaderCompilation.vue";
// import ContentBlock from "../components/ContentBlockPages.vue";
import VideoSectionDesktop from '../components/desktop/VideoSection.vue';
import VideoSectionMobile from '../components/mobile/VideoSection.vue'
import data from "../data/data.json";
import blocks from '../data/blocks.json';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';

export default {
	components: {
		// Header,
		// ContentBlock,
		Swiper,
		SwiperSlide,
		VideoSectionDesktop,
		VideoSectionMobile
	},
	data() {
		return {
			cards: data,
			pages: ['mostFriends', 'mostProfitable', 'popularPaid', 'mostFriendsDay', 'mostFriendsWeek']
		};
	},
	computed: {
		block() {
			// eslint-disable-next-line no-undef
			return blocks[this.pages.findIndex(el => el === path)]
		}
	}
};
</script>

<style scoped>
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
}
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
.compilation__content {
	display: flex;
	flex-wrap: wrap;
	max-width: 600px;
	width: 100%;
	margin: 0 auto;
}
.swiper-slide{
			display: flex;
		}
</style>