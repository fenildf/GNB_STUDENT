<template>
  <view-box body-padding-top="46px">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;" :left-options="{backText: '我的班级'}">
      <div slot="right">
        <router-link :to="{name: 'class_add'}" style="margin:0">
          <i class="icon iconfont icon-plus" style="padding:8px;font-size:28px;top:-1px;right:-10px;"></i>
        </router-link>
        <!-- <router-link :to="{ path: 'class/message'}" style="margin:0">
          <i class="icon iconfont icon-comment2" style="padding:10px;margin:0 -10px 0 0"></i>
        </router-link> -->
      </div>
    </x-header>
    <div>
      <!-- <search ref="myClass" cancel-text='' style='margin-bottom:.5rem;' @click.native="$router.push({name: 'class_add'})" :auto-fixed="false" placeholder="请输入老师的手机号码或班级码"></search> -->
      <group gutter="0" v-if="!loading">
        <template v-for="(item, index) in ClassMy">
          <cell :title="item.name" :link="'detail/'+item.classCode" :key='index'></cell>
        </template>
      </group>
      <div style="text-align:center;padding:20px 0;">
        <spinner v-if="loading" type="ripple"></spinner>
        <p v-else-if="ClassMy.length === 0" style="font-size:16px;color:#4cc0be" @click="$router.push({name: 'class_add'})">点我加入班级~</p>
      </div>
    </div>
  </view-box>
</template>

<script>
import {XHeader, Cell, Group, Spinner, ViewBox, Search} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'index',
  components: {
    XHeader, Cell, Group, ViewBox, Spinner, Search
  },
  methods: {
    ...mapActions(['getMyClass', 'myClassClear']),
    _getData () {
      this.getMyClass().then(() => {
        this.loading = false
      })
    }
  },
  computed: {
    ...mapGetters(['ClassMy'])
  },
  data () {
    return {
      loading: true
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name === 'index' || from.name === 'class_add') {
      next(vm => {
        vm.myClassClear()
        vm.loading = true
        vm._getData()
      })
    } else {
      next()
    }
  }
}
</script>
