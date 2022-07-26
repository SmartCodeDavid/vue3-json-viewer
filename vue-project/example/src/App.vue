<template>
<div class="box">
  <!-- <h2>明亮</h2> -->
 <JsonViewer :value="jsonData" copyable boxed sort theme="light"/>
  <!-- <h2>暗黑</h2>
   <JsonViewer :value="jsonData" copyable boxed sort theme="dark"/> -->
</div>
 
</template>

<script setup>
//组件引入
import {JsonViewer} from "../../../src"
// import "../../../dist/vue3-json-viewer/dist/index.css";
// import "../../../dist/index.css"
import { reactive, ref } from "vue";
let obj = {
  name: "qiu",//字符串
  age: 18,//数组
  isMan:false,//布尔值
  date:new Date(),
  fn:()=>{},
  arr:[1,2,5],
  arr1:[1,2,5],
  arr2:[1,2,5],
  arr3:[1,2,5],
  arr4:[1,2,5],
  arr5:[1,2,5],
  arr6:[1,2,5],
  arr7:[1,2,5],
  arr8:[[1,2,4,4,6], [1,1,2,3,5,5]],
};
let obj2 = {
    "id": "a03359fb21ccb66914f4efa5000be171",
    "text": "Accepts a path to specify the custom workspace root. Could be a absolute path or a path",
    "chunks": [
        {
            "id": "fadea4d2723e8c5aed1a8e8b00c8dc51",
            "text": "Accepts a path to specify the custom workspace root.",
            "granularity": 1,
            "parent_id": "a03359fb21ccb66914f4efa5000be171",
            "weight": 1,
            "location": [
                0,
                52
            ]
        },
        {
            "id": "5d8487f7b978903954e7a881e90d0cb9",
            "text": "Could be a absolute path or a path",
            "granularity": 1,
            "parent_id": "a03359fb21ccb66914f4efa5000be171",
            "weight": 1,
            "offset": 1,
            "location": [
                52,
                87
            ]
        }
    ]
};
const jsonData = reactive(obj2);
</script>

<style>
.box{
    margin-top: 1rem;
}
</style>