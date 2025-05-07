export default function(config) {
  config.setInputDirectory("src");
  config.setOutputDirectory("dist");

  // Copy style files
  config.addPassthroughCopy({"../styles/dist/*": "assets/styles" });
  // Copy static files
  config.addPassthroughCopy("assets");
};
