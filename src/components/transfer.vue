<template>
  <section class="transfer">
    <div class="list list-all">
      <div class="item" v-for="(item, index) in list" :key="index">
        <label v-show="item.belong === 'checkedList0'">
          <input
            type="checkbox"
            :value="item.id"
            v-model="checkedList0"
            @change="e => handleChange(e, item)"
          >
          {{ item.name }}
        </label>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: space-between;">
      <div class="part" style="display: flex;  justify-content: space-between;">
        <div class="group">
          <div
            class="btn"
            :class="{ active: checkedList0.length, disabled: !checkedList0.length }"
            @click="handleTransfer(0, 1)"
          >&gt;</div>
          <div
            class="btn"
            :class="{ active: checkedList1.length, disabled: !checkedList1.length }"
            @click="handleTransfer(1, 0)"
          >&lt;</div>
        </div>
        <div class="list list-part">
          <div class="item" v-for="(item, index) in list" :key="index">
            <label v-show="item.belong === 'checkedList1'">
              <input
                type="checkbox"
                :value="item.id"
                v-model="checkedList1"
                @change="e => handleChange(e, item)"
              >
              {{ item.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="part" style="display: flex;  justify-content: space-between;">
        <div class="group">
          <div
            class="btn"
            :class="{ active: checkedList0.length, disabled: !checkedList0.length }"
            @click="handleTransfer(0, 2)"
          >&gt;</div>
          <div
            class="btn"
            :class="{ active: checkedList2.length, disabled: !checkedList2.length }"
            @click="handleTransfer(2, 0)"
          >&lt;</div>
        </div>
        <div class="list list-part">
          <div class="item" v-for="(item, index) in list" :key="index">
            <label v-show="item.belong === 'checkedList2'">
              <input
                type="checkbox"
                :value="item.id"
                v-model="checkedList2"
                @change="e => handleChange(e, item)"
              >
              {{ item.name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  components: {},
  computed: {},
  data() {
    return {
      checkedList0: [],
      checkedList1: [],
      checkedList2: [],
      list: [
        { belong: "checkedList0", name: "张三", id: "张三" },
        { belong: "checkedList0", name: "李四", id: "李四" },
        { belong: "checkedList0", name: "王五", id: "王五" }
      ]
    };
  },
  methods: {
    handleChange(e, item) {
      const v = e.target.value;
    },
    handleTransfer(a, b) {
      this.list.forEach(item => {
        if (this["checkedList" + a].includes(item.id)) {
          item.belong = "checkedList" + b;
        }
      });
      this["checkedList" + a] = [];
    },
    getData() {
      const list1 = this.list.filter(item => item.belong === "checkedList1");
      const list2 = this.list.filter(item => item.belong === "checkedList2");

      // 只要 id
      const id1 = list1.map(item => item.id)
      const id2 = list2.map(item => item.id)
    }
  }
};
</script>

<style>
.transfer {
  display: flex;
}
.list {
  display: inline-block;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  min-width: 200px;
  min-height: 100px;
}
.list input {
  vertical-align: bottom;
}
.transfer .buttons {
  margin: 0 10px;
}
.transfer .btn {
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  color: #ccc;
  color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 5px 15px;
}
.transfer .btn.disabled {
  cursor: not-allowed;
}
.transfer .btn.active {
  border-color: #1890ff;
  background-color: #1890ff;
  color: #fff;
  cursor: pointer;
}
.group {
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.group .btn {
  margin: 5px 0;
}
</style>