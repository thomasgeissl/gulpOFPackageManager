//process.chdir('..');

var fs = require('fs');
var gulp = require('gulp');
var git = require('gulp-git');


var settings = {
  "config_path": process.env.INIT_CWD+"/package.json",
  "local_addons_directory": process.env.INIT_CWD+"/local_addons",
  "libs_directory": process.env.INIT_CWD+"/libs"
}
var dependencies = {};
var cloneCounter = 0;
function incrementCloneCounter(){
  cloneCounter++;
}

gulp.task('read', function(){
  dependencies = require(settings.config_path);
  console.log(dependencies.addons);
});

gulp.task('clone',['read'], function(done){
  var addons = dependencies.addons;
  var libs = dependencies.libs;

  if(addons.length > 0){
    // cloneCounter = 0;
    // create directory if it does not exist
    if (!fs.existsSync(settings.local_addons_directory)){
      fs.mkdirSync(settings.local_addons_directory);
    }

    for (var i = 0; i < addons.length; i++) {
      var url;
      if(addons[i].url){
        url = addons[i].url;
      }else if (addons[i].github) {
        url = "https://github.com/"+addons[i].github+".git";
      }
      git.clone(url, {cwd: settings.local_addons_directory}, function(err){
        if (err) throw err;
        // cloneCounter++;
      });
    }
  }
  if(libs.length > 0){
    // cloneCounter = 0;
    // create directory if it does not exist
    if (!fs.existsSync(settings.libs_directory)){
      fs.mkdirSync(settings.libs_directory);
    }

    for (var i = 0; i < libs.length; i++) {
      git.clone(libs[i].url, {cwd: settings.libs_directory}, function(err){
        if (err) throw err;
        // cloneCounter++;
      });
    }
  }
  // TODO: make sure addons are cloned
  // while(cloneCounter < addons.length){}
  return done();
});

gulp.task('checkout',['read'], function(done){//repleace read by clone
  var addons = dependencies.addons;
  var libs = dependencies.libs;
  for (var i = 0; i < addons.length; i++) {
    if(addons[i].checkout){
      var name = addons[i].url.split("/").pop().split(".")[0];
      git.checkout(addons[i].checkout,{cwd: settings.local_addons_directory+"/"+name}, function(err){
        if (err) throw err;
      });
    }
  }
  for (var i = 0; i < libs.length; i++) {
    if(libs[i].checkout){
      var name = libs[i].url.split("/").pop().split(".")[0];
      git.checkout(libs[i].checkout,{cwd: settings.libs_directory+"/"+name}, function(err){
        if (err) throw err;
      });
    }
  }
  // TODO: make sure addons are checked out
  return done();
});
