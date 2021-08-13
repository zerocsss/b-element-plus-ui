<template>
  <div>{{ title }}</div>
  <el-table :data="data || state.tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="state.pagination.currentPage"
    :page-sizes="[10, 20, 30, 50]"
    :page-size="10"
    layout="total, prev, pager, next"
    :total="state.pagination.total"
  >
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "CompA",
  props: {
    title: String,
    data: Array,
    handleCurrentChange: Function,
  },
  setup(props) {
    console.log(props);
    const state = reactive({
      pagination: {
        currentPage: 1,
        total: 0,
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    });

    return {
      state,
    };
  },
});
</script>
