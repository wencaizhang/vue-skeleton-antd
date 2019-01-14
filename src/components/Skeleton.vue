<template>
  <div :class="{ 'vue-skeleton': loading, 'vue-skeleton-active': loading && active }">
    <template v-if="loading">
      <div v-show="avatar" class="vue-skeleton-header">
        <span class="vue-skeleton-avatar" :style="{ 'border-radius': avatarRadius }"></span>
      </div>
      <div class="vue-skeleton-content">
        <h3 v-show="title" :style="{width: titleWidth}" class="vue-skeleton-title"></h3>
        <div v-show="paragraph" class="vue-skeleton-paragraph">
          <div
            class="vue-skeleton-item"
            :style="{width: paragraphWidth}"
            :key="i"
            v-for="i in rows"
          ></div>
        </div>
      </div>
    </template>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script>
export default {
  name: "skeleton",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    paragraph: {
      type: [Boolean, Object],
      default: true
    },
    title: {
      type: [Boolean, Object],
      default: true
    },
    avatar: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    rows() {
      if (typeof this.paragraph == "object" && this.paragraph.rows) {
        return this.paragraph.rows;
      }
      return 3;
    },
    paragraphWidth() {
      if (typeof this.paragraph == "object" && this.paragraph.width) {
        return this.paragraph.width;
      }
      return "100%";
    },
    titleWidth() {
      if (typeof this.title == "object" && this.title.width) {
        return this.title.width;
      }
      return "50%";
    },
    avatarRadius() {
      const arr = ['circle', 'square']
      let shape = 'circle';
      if (typeof this.avatar == "object" && this.avatar.shape && arr.includes(this.avatar.shape)) {
        shape = this.avatar.shape
      }
      if (shape === 'circle') {
        return '50%';
      }
      return '0%';
      
    },
  }
};
</script>

<style lang="less" scoped>
@bgc: #f2f2f2;
@gradient: #e6e6e6;

h3 {
  margin: 0;
}
.vue-skeleton {
  display: flex;
  flex-direction: row;

  .vue-skeleton-header {
    padding-right: 15px;

    .vue-skeleton-avatar {
      display: inline-block;
      height: 40px;
      width: 40px;
      line-height: 40px;
      border-radius: 50%;
      background: @bgc;
    }
  }
  .vue-skeleton-content {
    flex: 1;

    .vue-skeleton-title {
      height: 16px;
      margin-bottom: 16px;
      background: @bgc;
      width: 50%;
    }
    .vue-skeleton-item {
      height: 16px;
      margin-top: 16px;
      list-style: none;
      background: @bgc;
      &:first-child {
        margin: 0;
      }
      &:last-child {
        width: 61%;
      }
    }
  }

  &.vue-skeleton-active {
    .vue-skeleton-title,
    .vue-skeleton-avatar,
    .vue-skeleton-item {
      background: linear-gradient(90deg, @bgc 25%, @gradient 37%, @bgc 63%);
      animation: skeleton-loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
  }
}

@-webkit-keyframes skeleton-loading {
  0%,
  100% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
@keyframes skeleton-loading {
  0%,
  100% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>