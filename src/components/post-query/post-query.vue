<template>
  <div class="query-box">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="快递公司">
        <el-select v-model="com" placeholder="请选择快递公司">
          <el-option v-for="item in comList" :key='item.no' :label="item.com" :value="item.no"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="快递单号">
        <el-input v-model="no" placeholder="请输入快递单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="post-info-box">
      <ul class="info-box">
        <li v-for="item in infoList" :key="item.datetime">
          <el-tag>{{item.datetime}}</el-tag>
          <span>{{item.remark}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>F

<script>
import axios from "axios";
export default {
  name: "post-query",
  data() {
    return {
      key: "c7e99a5c5ceceddc5311704f8d3552e5",
      comList: [],
      infoList:[],
      com: "",
      no: ""
    };
  },
  created() {
    // this.getCompany()
  },
  methods: {
    getCompany() {
      axios.get(`/api1/com?key=${this.key}`).then(res => {
        this.comList = res.data.result;
      });
    },
    query() {
      axios.get(`/api1/index?key=${this.key}&com=${this.com}&no=${this.no}`).then(res=>{
        this.infoList = res.data.result.list   
      })
    }
  }
};
</script>

<style scoped lang="less">
.query-box {
  .el-form {
    border-bottom: 1px solid #ccc;
  }
  .post-info-box {
    height: 500px;
    max-height: 500px;
    overflow: auto;
    .info-box{
      padding: 50px 0 0 0;
      li{
        height: 35px;
        el-tag{
          height: 12px;
          font-size: 12px;
        }
        span{
          display: inline-block;
          margin-left: 10px;
          height: 22px;
          line-height: 22px;
          font-size:18px;
          font-family: "微软雅黑"
        }
      }
    }
  }
}
</style>
