<template>
  <div class="box">
    <!-- <h2>明亮</h2> -->
    <JsonViewer :value="jsonData" copyable boxed sort theme="light" :allowImageShow="true" />
    <!-- <h2>暗黑</h2>
   <JsonViewer :value="jsonData" copyable boxed sort theme="dark"/> -->
  </div>
</template>

<script setup>
//组件引入
import { JsonViewer } from "../../../src";

// mock data from document array
import docArrayJson from './mock/data.json';

// import "../../../dist/vue3-json-viewer/dist/index.css";
// import "../../../dist/index.css"
import { reactive, ref } from "vue";

const jsonData = reactive(docArrayJson);
</script>

<style>
.box {
  height: 100%;
  /* margin-top: 1rem; */
}
</style>