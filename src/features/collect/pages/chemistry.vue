<template>
  <div>
    <card v-for="(item, index) in list" :key="index">
      <div class="weui-panel__hd" slot="header">
        <flexbox>
          <flexbox-item :span="10" style="color:#4cc0be">{{item.chapter_name}}</flexbox-item>
          <flexbox-item :span="2">难度: {{item.degree}}</flexbox-item>
        </flexbox>
      </div>
      <div slot="content" @click="$router.push({name:'example', params: {subjectId: '8', id: item.exercises_id, from: item.from}})">
        <div v-html="item.stem"></div>
        <div v-for="(value, key) in item.opt_jo" style="padding-top:5px;" :key='key'>
          {{ key }}： <p v-html="value" style="display:inline-block"></p>
        </div>
      </div>
      <div slot="footer">
        <div class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd" style="text-align:right">收藏时间: {{item.collect_time | ymd}}</div>
        </div>
      </div>
    </card>
    <div style="text-align:center;padding:20px 0;">
      <spinner v-if="loading" type="lines"></spinner>
      <div>
        <p style="font-size:16px;color:#4cc0be" v-if="loadingNoData">已经加载全部收藏~</p>
        <p style="font-size:16px;color:#4cc0be" v-if="!loadingNoData && !loading" @click="_getData">点我加载更多</p>
      </div>
    </div>
  </div>
</template>

<script>
import {XHeader, Card, Spinner, Flexbox, FlexboxItem} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'chemistry',
  components: {
    XHeader, Card, Spinner, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['collectChemistry']),
    list () {
      return this.collectChemistry.list
    }
  },
  data () {
    return {
      loading: true,
      loadingNoData: false
    }
  },
  methods: {
    ...mapActions(['getCollect', 'setCollectScroll']),
    _getData () {
      this.loading = true
      this.getCollect({id: 8, subject: 'chemistry'}).then((res) => {
        if (res.data.data.list.length < 10) {
          this.loadingNoData = true
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.collectChemistry.isReset) {
        vm._getData()
      }
      vm.$parent.$refs.viewBoxBody.scrollTop = vm.collectChemistry.scroll
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setCollectScroll({subject: 'chemistry', height: this.$parent.$refs.viewBoxBody.scrollTop})
    next()
  }
}
</script>
