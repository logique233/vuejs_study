<template>
  <el-table :data="data" border style="width: 100%">
    <el-table-column prop="day" label="天" ></el-table-column>
    <el-table-column prop="date" label="日期" ></el-table-column>
    <el-table-column prop="week" label="周"></el-table-column>
    <el-table-column prop="wea" label="天气"></el-table-column>
    <el-table-column prop="wea_img" label="图片"></el-table-column>
    <el-table-column prop="air" label="空气"></el-table-column>
    <el-table-column prop="air_level" label="空气等级"></el-table-column>
    <el-table-column prop="air_tips" label="小贴士"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  }
};
</script>