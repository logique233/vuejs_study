<template>
  <div>
    <el-table :data="data" border style="width: 100%">
      <!-- <el-table-column prop="day" label="天"></el-table-column> -->
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="week" label="周"></el-table-column>
      <el-table-column prop="wea" label="天气"></el-table-column>
      <el-table-column prop="wea_img" label="图片"></el-table-column>
      <el-table-column prop="air" label="空气"></el-table-column>
      <el-table-column prop="air_level" label="空气等级"></el-table-column>
      <!-- <el-table-column prop="air_tips" label="小贴士"></el-table-column> -->
      <el-table-column label="操作" align="center" min-width="200">
        <template >
          <el-button type="info" @click="dialogTableVisible = true">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="地址" :visible.sync="dialogTableVisible">
      <el-table :data="data">
        <el-table-column prop="day" label="日期"></el-table-column>
        <el-table-column prop="wea" label="周"></el-table-column>
        <el-table-column prop="tem" label="天气"></el-table-column>
        <el-table-column prop="win" label="天气"></el-table-column>
        <el-table-column prop="win_speed" label="天气"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      dialogTableVisible: false,
      
    };
  }
};
</script>