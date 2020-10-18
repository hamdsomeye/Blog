<template>
  <div class="header">
    <div class="common-nav">
      <div class="header-logo">logo</div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1b2327"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="login-right">
        <el-dropdown class="nav-li">
          <span class="el-dropdown-link">帮助<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>联系客服</el-dropdown-item>
            <el-dropdown-item>砖石会员</el-dropdown-item>
            <el-dropdown-item>帮助文档</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="nav-li">登录</div>
        <div class="nav-li">注册</div>
      </div>
    </div>
    <div class="index-header-wrap">
      <div class="menu-info" @click="showHeader"><i class="iconfont icon-ziyuan "></i></div>
      <div>login</div>
      <div class="user-info"><i class="iconfont icon-ren "></i></div>
    </div>
    <div class="m-header-memu" :class="menu_disabled">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#ffffff"
        text-color="#6a6a6a"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">我的工作台</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">帮助</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menu_disabled: 'header-menu-disabled',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showHeader() {
      if (this.menu_disabled === '') {
        this.menu_disabled = 'header-menu-disabled';
        return;
      }
      this.menu_disabled = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .header{
    position: relative;
    .header-logo{
      position: absolute;
      left: 250rpx;
      top: 0;
      left: 200px;
      z-index: 99;
      line-height: 60px;
      text-align: center;
      width: 100px;
      color: #fff;
      height: 60px;
      cursor: pointer;
    }
    .el-menu-demo {
      padding: 0 300px;
    }
    .login-right {
      position: absolute;
      right: 300px;
      top: 0;
      .nav-li{
        display: inline-block;
        float: left;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        color: #fff;
        width: 80px;
        text-align: center;
        &:hover{
          color: #ffd04b;
          background-color: rgb(22, 28, 39);
        }
      }
    }
    .index-header-wrap{
      position: relative;
      .menu-info{
        position: absolute;
        left: 30px;
        top: 0;
      }
      .user-info{
        position: absolute;
        right: 30px;
        top: 0;
      }
    }
    .m-header-memu{
      padding: 60px 70px;
      &>.el-menu{
        border-right: 0;
        &>li{
          border-bottom: 1px solid #f0f1f4;
          &:hover{
            background-color: #fff !important;
          }
        }
      }
    }
    .header-menu-disabled{
      display: none;
    }
  }
</style>
