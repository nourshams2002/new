const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("png", "jpg", "jpeg");
config.resolver.sourceExts.push("jsx", "js", "ts", "tsx");

module.exports = config;
