<template>
  <router-view />
  <van-tabbar route fixed placeholder active-color="#FF8000">
    <van-tabbar-item to="/home" replace icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" replace icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/message" replace icon="comment-o">消息</van-tabbar-item>
    <van-tabbar-item to="/cart" replace icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/user" replace icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>