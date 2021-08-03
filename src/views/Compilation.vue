<template>
	<div>
		<video-section-desktop v-if="false" v-bind:block="block"></video-section-desktop>
		<video-section-mobile v-else v-bind:block="block"></video-section-mobile>
	</div>
</template>

<script>
import VideoSectionDesktop from '../components/desktop/VideoSection.vue';
import VideoSectionMobile from '../components/mobile/VideoSection.vue'
import blocks from '../data/blocks.json';

export default {
	components: {
		VideoSectionDesktop,
		VideoSectionMobile
	},
	data() {
		return {
			blocks: blocks,
			pages: ['most-friends', 'most-profitable', 'popular-paid', 'most-friends-day', 'most-friends-week']
		};
	},
	computed: {
		block() {
			console.log(this.pages.findIndex(el => el === this.$route.params.param))
			return blocks[this.pages.findIndex(el => el === this.$route.params.param)]
		}
	}
};
</script>
