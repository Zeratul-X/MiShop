/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : mishop

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 09/07/2020 13:37:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodstype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` int(2) NOT NULL,
  `goodscontent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `remarks` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodsprice` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '小米10', 'Mi10', 1, '「128GB直降200元，到手3799元，256GB直降300元，到手价3999元起」骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配Wi-Fi 6 / 超强VC液冷散热 / 30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量 / 多功能NFC', NULL, '../images/goods/Mi10/black/1.jpg', 3999.00);
INSERT INTO `goods` VALUES (2, '小米10 Pro', 'Mi10Pro', 1, '向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G /新一代LPDDR5内存/50W极速闪充+30W无线闪充+10W无线反充/对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC', NULL, '../images/goods/Mi10Pro/blue/1.jpg', 4999.00);
INSERT INTO `goods` VALUES (3, '小米9 Pro 5G', 'Mi9Pro5G', 1, '5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 40W有线闪充+30W无线闪充+10W无线反充，4000mAh长续航 / 4800万全焦段三摄 / 超振感横向线性马达 / VC液冷散热 / 高色准三星AMOLED屏幕 / 多功能NFC / 赠送小米云服务1TB云存储', NULL, '../images/goods/Mi9Pro5G/1.jpg', 3799.00);
INSERT INTO `goods` VALUES (4, '腾讯黑鲨游戏手机3系列', 'BSGame3', 1, '「购机享花呗12期免息」骁龙865处理器 / 双模5G / 腾讯Solar Core游戏引擎 / 270Hz触控采样率+90Hz屏幕刷新率 / 最高65W极速闪充+背部磁吸充电 / “三明治”液冷散热 / 屏幕压感3.0 / 游戏语音操控', NULL, '../images/goods/BSGame3/1.jpg', 3499.00);
INSERT INTO `goods` VALUES (5, '小米CC9 Pro', 'MiCC9Pro', 1, '1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器', NULL, '../images/goods/MiCC9Pro/1.jpg', 1499.00);
INSERT INTO `goods` VALUES (6, 'Redmi 8', 'RedMi8', 2, '「4GB+64GB到手价仅799元」5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22寸水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机', NULL, '../images/goods/RedMi8/1.jpg', 799.00);
INSERT INTO `goods` VALUES (7, 'Redmi K30 Pro 变焦版', 'RedMiK30C', 2, '「12GB+512GB到手价仅3999元，购机享信用卡24期分期免息，低至167元/期」双模5G / 高通骁龙865 / 弹出式超光感全面屏 / 索尼6400万双光学防抖四摄 / 8K视频拍摄 / 30倍变焦 / 超大面积VC立体散热 / 4700mAh+33W疾速闪充 / 多功能NFC / 红外遥控', NULL, '../images/goods/RedMiK30C/1.jpg', 3399.00);
INSERT INTO `goods` VALUES (8, 'Redmi K30 Pro 系列', 'RedMiK30Pro', 2, '双模5G / 高通骁龙865 / 弹出式超光感全面屏 /索尼 6400万高清四摄 / 超大面积VC立体散热 / 4700mAh+33W疾速闪充 / 多功能NFC / 红外遥控', NULL, '../images/goods/RedMiK30Pro/1.jpg', 2699.00);
INSERT INTO `goods` VALUES (9, '小米全面屏电视E65A', 'MiFullE65A', 3, '全面屏设计 / 4K超高清 HDR / 纤薄机身 / 2GB+8GB大内存 / 64位四核处理器 / 内置小爱同学', NULL, '../images/goods/MiFullE65A/1.jpg', 2699.00);
INSERT INTO `goods` VALUES (10, '小米MIX Alpha', 'MiMixAlpha', 1, '创新环绕屏，极具未来感的智能交互体验 / 1亿像素超高清相机，超大感光元件 / 5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 纳米硅基锂离子4050mAh电池，40W超级快充 / 钛合金+精密陶瓷+蓝宝石镜片前沿工艺', NULL, '../images/goods/MiMixAlpha/1.jpg', 19999.00);
INSERT INTO `goods` VALUES (11, '小米电视 大师 65英寸OLED', 'MiTVMaster65OLED', 3, '「大师系列新品电视火爆预约中,7月8日10点开售，享6期免息！敬请期待！」10.7亿原色显示 / 98.5%DCI-P3广色域 / 120Hz流速屏 / AI大师引擎 / 3D全景声，音响系统', NULL, '../images/goods/MiTVMaster65OLED/1.jpg', 12999.00);

-- ----------------------------
-- Table structure for mi10
-- ----------------------------
DROP TABLE IF EXISTS `mi10`;
CREATE TABLE `mi10`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `edition` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(30, 2) NOT NULL,
  `discount` decimal(30, 2) NOT NULL,
  `imgUrl1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodsid` int(10) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mi10
-- ----------------------------
INSERT INTO `mi10` VALUES (1, '钛银黑', '8GB+128GB', 3999.00, 3799.00, '../images/goods/Mi10/black/1.jpg', '../images/goods/Mi10/black/2.jpg', '../images/goods/Mi10/black/3.jpg', '../images/goods/Mi10/black/4.jpg', 1);
INSERT INTO `mi10` VALUES (2, '钛银黑', '8GB+256GB', 4299.00, 3999.00, '../images/goods/Mi10/black/1.jpg', '../images/goods/Mi10/black/2.jpg', '../images/goods/Mi10/black/3.jpg', '../images/goods/Mi10/black/4.jpg', 1);
INSERT INTO `mi10` VALUES (3, '钛银黑', '12GB+256GB', 4699.00, 4399.00, '../images/goods/Mi10/black/1.jpg', '../images/goods/Mi10/black/2.jpg', '../images/goods/Mi10/black/3.jpg', '../images/goods/Mi10/black/4.jpg', 1);
INSERT INTO `mi10` VALUES (4, '冰海蓝', '8GB+128GB', 3999.00, 3799.00, '../images/goods/Mi10/blue/1.jpg', '../images/goods/Mi10/blue/2.jpg', '../images/goods/Mi10/blue/3.jpg', '../images/goods/Mi10/blue/4.jpg', 1);
INSERT INTO `mi10` VALUES (5, '冰海蓝', '8GB+256GB', 4299.00, 3999.00, '../images/goods/Mi10/blue/1.jpg', '../images/goods/Mi10/blue/2.jpg', '../images/goods/Mi10/blue/3.jpg', '../images/goods/Mi10/blue/4.jpg', 1);
INSERT INTO `mi10` VALUES (6, '冰海蓝', '12GB+256GB', 4699.00, 4399.00, '../images/goods/Mi10/blue/1.jpg', '../images/goods/Mi10/blue/2.jpg', '../images/goods/Mi10/blue/3.jpg', '../images/goods/Mi10/blue/4.jpg', 1);
INSERT INTO `mi10` VALUES (7, '蜜桃银', '8GB+128GB', 3999.00, 3799.00, '../images/goods/Mi10/gold/1.jpg', '../images/goods/Mi10/gold/2.jpg', '../images/goods/Mi10/gold/3.jpg', '../images/goods/Mi10/gold/4.jpg', 1);
INSERT INTO `mi10` VALUES (8, '蜜桃银', '8GB+256GB', 4299.00, 3999.00, '../images/goods/Mi10/gold/1.jpg', '../images/goods/Mi10/gold/2.jpg', '../images/goods/Mi10/gold/3.jpg', '../images/goods/Mi10/gold/4.jpg', 1);
INSERT INTO `mi10` VALUES (9, '蜜桃银', '12GB+256GB', 4699.00, 4399.00, '../images/goods/Mi10/gold/1.jpg', '../images/goods/Mi10/gold/2.jpg', '../images/goods/Mi10/gold/3.jpg', '../images/goods/Mi10/gold/4.jpg', 1);

-- ----------------------------
-- Table structure for mi10pro
-- ----------------------------
DROP TABLE IF EXISTS `mi10pro`;
CREATE TABLE `mi10pro`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `edition` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(30, 2) NOT NULL,
  `discount` decimal(30, 2) NULL DEFAULT NULL,
  `imgUrl1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgUrl4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodsid` int(10) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mi10pro
-- ----------------------------
INSERT INTO `mi10pro` VALUES (1, '珍珠白', '8GB+256GB', 4999.00, NULL, '../images/goods/Mi10Pro/white/1.jpg', '../images/goods/Mi10Pro/white/2.jpg', '../images/goods/Mi10Pro/white/3.jpg', '../images/goods/Mi10Pro/white/4.jpg', 1);
INSERT INTO `mi10pro` VALUES (2, '珍珠白', '12GB+256GB', 5499.00, NULL, '../images/goods/Mi10Pro/white/1.jpg', '../images/goods/Mi10Pro/white/2.jpg', '../images/goods/Mi10Pro/white/3.jpg', '../images/goods/Mi10Pro/white/4.jpg', 1);
INSERT INTO `mi10pro` VALUES (3, '珍珠白', '12GB+512GB', 5999.00, NULL, '../images/goods/Mi10Pro/white/1.jpg', '../images/goods/Mi10Pro/white/2.jpg', '../images/goods/Mi10Pro/white/3.jpg', '../images/goods/Mi10Pro/white/4.jpg', 1);
INSERT INTO `mi10pro` VALUES (4, '星空蓝', '8GB+256GB', 4999.00, NULL, '../images/goods/Mi10Pro/blue/1.jpg', '../images/goods/Mi10Pro/blue/2.jpg', '../images/goods/Mi10Pro/blue/3.jpg', '../images/goods/Mi10Pro/blue/4.jpg', 1);
INSERT INTO `mi10pro` VALUES (5, '星空蓝', '12GB+256GB', 5499.00, NULL, '../images/goods/Mi10Pro/blue/1.jpg', '../images/goods/Mi10Pro/blue/2.jpg', '../images/goods/Mi10Pro/blue/3.jpg', '../images/goods/Mi10Pro/blue/4.jpg', 1);
INSERT INTO `mi10pro` VALUES (6, '星空蓝', '12GB+512GB', 5999.00, NULL, '../images/goods/Mi10Pro/blue/1.jpg', '../images/goods/Mi10Pro/blue/2.jpg', '../images/goods/Mi10Pro/blue/3.jpg', '../images/goods/Mi10Pro/blue/4.jpg', 1);

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `goodsid` int(10) NOT NULL,
  `goodsname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userid` int(10) NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `number` int(10) NOT NULL,
  `goodsedition` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `goodscolor` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `totalprice` decimal(10, 2) NOT NULL,
  `singleprice` decimal(10, 2) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 186 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES (184, 1, 'Mi10', 1, 'admin', 1, '8GB+128GB', '钛银黑', 3999.00, 3999.00, '../images/goods/Mi10/black/4.jpg');
INSERT INTO `shopcar` VALUES (185, 1, 'Mi10', 1, 'admin', 1, '8GB+256GB', '钛银黑', 4299.00, 4299.00, '../images/goods/Mi10/black/4.jpg');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `typeid` int(2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '小米', 1);
INSERT INTO `type` VALUES (2, '红米', 2);
INSERT INTO `type` VALUES (3, '电视', 3);
INSERT INTO `type` VALUES (4, '电脑', 4);
INSERT INTO `type` VALUES (5, '平板', 5);
INSERT INTO `type` VALUES (6, '耳机', 6);
INSERT INTO `type` VALUES (7, '路由器', 7);
INSERT INTO `type` VALUES (8, '保护套', 8);
INSERT INTO `type` VALUES (9, '箱包', 9);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telephone` decimal(11, 0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123456', 13388888888);
INSERT INTO `user` VALUES (2, 'admin123', '123456', 13333333333);
INSERT INTO `user` VALUES (3, 'ccc', '123456', 11111111111);

SET FOREIGN_KEY_CHECKS = 1;
