 <template>
  <body>
    <!-- <SearchMobile />
    <BlockSubject v-for="block in visibleList" :key="block.id" v-bind:block="block"/> -->
    <search-mobile v-if="false" v-bind:visibleList="visibleList"></search-mobile>
    <search-decktop v-else v-bind:visibleList="visibleList"></search-decktop>
  </body>
</template>

<script>
// import SearchMobile from '../components/SearchMobile.vue'
// import Navigation from '../components/Navigation.vue'
import CardData from '../data/blocks.json'
// import BlockSubject from '../components/BlockSubject.vue'
import SearchMobile from '../components/mobile/Search.vue'
import SearchDecktop from '../components/desktop/Search.vue'

export default {
    name: 'Home',
    components: {
        // SearchMobile,
        // Navigation,
        // BlockSubject,
        SearchMobile,
        SearchDecktop
    },
    data: () => {
        return{
        CardData: CardData,
        pages: ['most-friends', 'most-profitable', 'popular-paid', 'most-friends-day', 'most-friends-week'],
        }
    },
    computed: {
        visibleList: function(){
        const arr =  this.CardData.map((item, index) => {
            if(item.counter >= 1000000){
            item.counter = ((item.counter/1000000).toFixed(1) + 'M')
            }
            if(item.counter <= 1000000){
            item.counter = ((item.counter/100000).toFixed(0) + 'K')
            }
            //временное решение, потом исправить!!!
            item['url'] = this.pages[index]
            console.log(item)
            return item
        })
        return arr
        }
    },
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
</style>
