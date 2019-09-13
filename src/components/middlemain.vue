<template>
  <div class="middlemain">
    <div>
      <el-input suffix-icon="el-icon-search" v-model="input"></el-input>
    </div>
    <div>
      <img src="../assets/list_selected.svg" />
      <img src="../assets/grid_unselected.svg" />
    </div>
    <div class="mainlist">
      <ul>
        <li
          v-for="(item,index) in listData"
          :key="index"
          :style="item"
          :class="{focustyle:item.selected}"
          @click="selectlist(index)"
        >
          <span>{{item.title}}</span>
          <div class="mark">
            <img src="../assets/markstar.svg" style="vertical-align: middle;" />
            <i class="el-icon-more icons"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations} from "vuex";
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
      ...mapMutations(['changeIndex']),
    getRandom(x) {
      return Math.floor(Math.random() * x) + 1;
    },
    selectlist(index) {
      for (let i in this.listData) {
        if (i == index) {
          this.listData[i].selected = !this.listData[i].selected;
        } else {
          this.listData[i].selected = false;
        }
      }
      this.$store.commit('changeIndex',index)
    }
  },
  mounted() {
    var color = ["red", "blue", "aqua", "yellow"];
    for (var i in this.listData) {
      this.$set(this.listData[i], "--styleObject", color[this.getRandom(3)]);
      this.$set(this.listData[i], "selected", false);
    }
    this.listData[0].selected = true;
  },
  computed: {
    ...mapGetters(["listData", "selectindex"])
  }
};
</script>
<style>
.mainlist {
  width: 100%;
}
.mainlist ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mainlist li {
  padding-top: 20px;
  padding-bottom: 20px;
  --styleObject: black;
}
.mainlist li::before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  background-color: var(--styleObject);
}
.icons {
  vertical-align: middle;
}
.mark {
  display: inline;
  position: relative;
  left: 30%;
}
.focustyle {
  background-color: #ffffff;
}
</style>