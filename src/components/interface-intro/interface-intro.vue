<template>
  <div>
    <el-tabs
      type="card"
      v-model="activeName[i]"
      @tab-click="handleClick"
      v-for="(item, i) in interfaces"
      :key="item.title">
      <el-tab-pane label="接口名称" :name="'first'+ i">{{item.title}}</el-tab-pane>
      <el-tab-pane label="接口说明" :name="'second'+ i">
        <ul>
          <li>接口地址：{{item.intro.address}}</li>
          <li>返回数据类型：{{item.intro.returnType}}</li>
          <li>请求方式：{{item.intro.methods}}</li>
          <li>请求示例：{{item.intro.example}}</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="请求参数" :name="'third'+ i" style="overflow: auto">
        <el-table
          :data="item.params"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="isrequired"
            label="必须"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="shuoming"
            label="说明">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="返回数据示例" :name="'fourth'+ i" v-html="item.returnJson"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "interface-intro",
    data() {
      return {
        activeName: [],
        interfaces: [
          {
            show: false,
            title: '快递公司编号对照表',
            intro: {
              address: 'http://v.juhe.cn/exp/com',
              returnType: 'json/xml/jsonp',
              methods: 'http post get',
              example: 'http://v.juhe.cn/exp/com?key=key'
            },
            params: [],
            returnJson: `<pre>{
  "resultcode": "200",
  "reason": "查询支持的快递公司成功",
  "result": [
    {
      "com": "顺丰",
      "no": "sf"
    },
    {
      "com": "申通",
      "no": "sto"
    },
    {
      "com": "圆通",
      "no": "yt"
    },
    {
      "com": "韵达",
      "no": "yd"
    },
    {
      "com": "天天",
      "no": "tt"
    }
    ......有省略
  ],
  "error_code": 0
}</pre>`
          },
          {
            show: true,
            title: '常用快递查询',
            intro: {
              address: 'http://v.juhe.cn/exp/index',
              returnType: 'json/xml',
              methods: 'http post get',
              example: 'http://v.juhe.cn/exp/index?key=key&com=sf&no=575677355677'
            },
            params: [
              {name: 'com', isrequired: '是', type: 'string', shuoming: '需要查询的快递公司编号'},
              {name: 'no', isrequired: '是', type: 'string', shuoming: '需要查询的快递单号'},
              {name: 'key', isrequired: '是', type: 'string', shuoming: '在个人中心->我的数据,接口名称上方查看'},
              {name: 'dtype', isrequired: '否', type: 'string', shuoming: '返回数据的格式,xml或json，默认json'}
            ],
            returnJson: `<pre>{
  "resultcode": "200", /* 老版状态码，新用户请忽略此字段 */
  "reason": "查询物流信息成功",
  "result": {
    "company": "EMS", /* 快递公司名字 */
    "com": "ems",
    "no": "1186465887499", /* 快递单号 */
    "status": "1", /* 1表示此快递单的物流信息不会发生变化，此时您可缓存下来；0表示有变化的可能性 */
    "list": [
      {
        "datetime": "2016-06-15 21:44:04",  /* 物流事件发生的时间 */
        "remark": "离开郴州市 发往长沙市【郴州市】", /* 物流事件的描述 */
        "zone": "" /* 快件当时所在区域，由于快递公司升级，现大多数快递不提供此信息 */
      },
      {
        "datetime": "2016-06-15 21:46:45",
        "remark": "郴州市邮政速递物流公司国际快件监管中心已收件（揽投员姓名：侯云,联系电话:）【郴州市】",
        "zone": ""
      },
      {
        "datetime": "2016-06-16 12:04:00",
        "remark": "离开长沙市 发往贵阳市（经转）【长沙市】",
        "zone": ""
      },
      {
        "datetime": "2016-06-17 07:53:00",
        "remark": "到达贵阳市处理中心（经转）【贵阳市】",
        "zone": ""
      },
      {
        "datetime": "2016-06-18 07:40:00",
        "remark": "离开贵阳市 发往毕节地区（经转）【贵阳市】",
        "zone": ""
      },
      {
        "datetime": "2016-06-18 09:59:00",
        "remark": "离开贵阳市 发往下一城市（经转）【贵阳市】",
        "zone": ""
      },
      {
        "datetime": "2016-06-18 12:01:00",
        "remark": "到达  纳雍县 处理中心【毕节地区】",
        "zone": ""
      },
      {
        "datetime": "2016-06-18 17:34:00",
        "remark": "离开纳雍县 发往纳雍县阳长邮政支局【毕节地区】",
        "zone": ""
      },
      {
        "datetime": "2016-06-20 17:55:00",
        "remark": "投递并签收，签收人：单位收发章 *【毕节地区】",
        "zone": ""
      }
    ]
  },
  "error_code": 0 /* 错误码，0表示查询正常，其他表示查询不到物流信息或发生了其他错误 */
}</pre>`
          }
        ],
        flag: this.$route.params.name
      }
    },
    created() {
      this.interfaces.forEach((item, i) => {
        this.activeName.push('first' + i)
      })
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  }
</script>

<style scoped lang="less">
  .el-tabs {
    width: 800px;
    min-height: 200px;
    max-height: 300px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    .el-tab-pane {
      height: 200px;
      max-height: 200px;
      overflow: auto;

      li {
        list-style: none;
        height: 30px;
        line-height: 30px;
      }
    }
  }
</style>
