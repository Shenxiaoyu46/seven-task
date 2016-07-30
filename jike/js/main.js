define(["require", "main"], function(require, main) {
    //搜索框
    require(["search"], function(search) {});
    // 导航栏悬浮
    require(["navigation"], function(navigation) {});
    // 推荐板块
    require(["recommend"], function(recommend) {});
    // 课程选择
    require(["course"], function(course) {});
    // 职业路径图
    require(["careerpaths"],function(careerpaths) {});
    // 知识体系图
    require(["knowledge"],function(knowledge){});
    // wiki
    require(["wiki"],function(wiki){});
    // 轮播图
    require(["topshow"], function(image) {});
    // 页面最后手动轮播图
    require(["company"], function(company) {});
    // 快速置顶
    require(["gotop"], function(gotop) {});
});
