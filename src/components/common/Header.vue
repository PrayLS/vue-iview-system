<template>
  <div class="header-wrapper">
    <div class="header-collapse-btn" @click="handleCollapse">
      <span v-if="!collapseFlag" class="iconfont large">&#xe611;</span>
      <span v-else class="iconfont large">&#xe615;</span>
    </div>
    <div class="header-logo">
      博客管理系统
    </div>
    <div class="header-right-content">
      <div class="header-edit">
        <div class="header-fullscreen-btn" @click="openScreen">
          <Tooltip :content="!fullscreenFlag ? '全屏' : '取消全屏'" placement="top">
            <Icon type="md-expand" />
          </Tooltip>
        </div>
        <div class="header-message-btn">
          <Tooltip content="消息" placement="top">
            <Icon type="md-notifications-outline" />
          </Tooltip>
        </div>
        <div class="header-user-avator">
          <img src="../../assets/image/user.jpg" />
        </div>
        <div class="header-user-name">
          <Dropdown @on-click="handleClick">
            <span class="header-name">{{username}}</span><Icon type="ios-arrow-down"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem name="loginout">退出登录</DropdownItem>
              <!-- <DropdownItem>炸酱面</DropdownItem> -->
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullscreenFlag: false,
      collapseFlag: false,
      name: 'prayLs'
    }
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username');
      return username ? username : this.name;
    }
  },
  methods: {
    handleCollapse () {
      this.collapseFlag = !this.collapseFlag
    },
    handleClick (name) {
      if (name === 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login');
      }
    },
    openScreen () {
      let element = document.documentElement;
        if (this.fullscreenFlag) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreenFlag = !this.fullscreenFlag;
    }
  },

}
</script>
<style lang="less" scoped>
  .header-wrapper {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 22px;
    color: #ffffff;
    background: #040832;
    .header-collapse-btn {
      float: left;
      padding: 0 20px;
      cursor: pointer;
      line-height: 60px;
      .large {
        font-size: 20px;
      }
    }
    .header-logo {
      float: left;
      width: 250px;
      line-height: 60px;
    }
    .header-right-content {
      float: right;
      margin-right: 50px;
      .header-edit {
        display: flex;
        height: 60px;
        align-items: center;
        .header-fullscreen-btn {
          margin-right: 5px;
          font-size: 24px;
        }
        .header-fullscreen-btn,
        .header-message-btn {
          position: relative;
          width: 30px;
          height: 30px;
          text-align: center;
          border-radius: 15px;
          cursor: pointer;
        }
        .header-user-avator {
          margin-left: 20px;
          img {
            display: block;
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }
        .header-user-name {
          margin-left: 20px;
          font-size: 18px;
          cursor: pointer;
          .header-name {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>