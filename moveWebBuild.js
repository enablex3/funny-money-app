var fileSystem = require("fs");

var sourceDir = "/home/ec2-user/environment/FunnyMoney/Frontend/funny-money-app/web-build";
var targetDir = "/home/ec2-user/environment/FunnyMoney/Frontend/webApp/web-build";

if ( !fileSystem.existsSync(sourceDir) ) {
    throw new Error("You must be developing locally. Build web on AWS server.");
}

fileSystem.rename(sourceDir, targetDir, function(err) {
	if (err) throw err
	console.log("web-build is located at " + targetDir);
});
