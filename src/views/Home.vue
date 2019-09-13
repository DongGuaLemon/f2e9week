<template>
  <div class="home">
    <el-row>
      <el-col :span="4">
        <div class="left">
          <leftslide />
        </div>
      </el-col>
      <el-col :span="5">
        <div class="middle">
          <middlemain />
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
          <quill-editor
            :style="heightfix"
            v-model="selectData.main"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations} from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import leftslide from "../components/leftslide";
import middlemain from "../components/middlemain";
export default {
  data() {
    return {
      content: "<h2>I am Example</h2>",
      heightfix:'height:100vh;',
      headerheight:0,
      bodyheight:0,
    };
  },
  methods: {
     ...mapMutations(['savenewmain']),
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange(quill){
       console.log("editor change!", quill);
       this.$store.commit('savenewmain',this.selectData.main)
    },
    handleResize() {
      this.headerheight = document.getElementsByClassName('ql-toolbar')[0].offsetHeight;
      this.bodyheight=window.innerHeight
      var height=this.bodyheight-this.headerheight
      this.heightfix='height:'+height+'px';
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed:{
    ...mapGetters(["selectData"])
  },
  name: "home",
  components: {
    HelloWorld,
    leftslide,
    middlemain
  }
};
</script>
<style>
.home {
  width: 100%;
  height: 100%;
}
.left {
  height: 100vh;
  background-color: #d0d5d9;
}
.middle {
  height: 100vh;
  background-color: #e7ecf1;
}
.right {
  background-color: white;
}
</style>