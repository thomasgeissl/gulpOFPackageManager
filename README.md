gulpOFPackageManager
===

Description
---
gulpOFPackageManager is a very experimental package manager for openFrameworks.
This is a work in progress and might undergo some changes.

I also plan to port this to oF.

Usage
---
Installation
####
* Clone this repo into your openFrameworks/scripts directory ```git clone https://github.com/thomasgeissl/gulpOFPackageManager.git /path/to/your/openFrameworks/scripts/gulpOFPackageManager```
* Install dependencies: ```cd /path/to/your/openFrameworks/scripts/gulpOFPackageManager && npm install```

Project management
####
* Clone dependencies: ```gulp --cwd /path/to/your/openFrameworks/scripts/gulpOFPackageManager clone```
* Checkout versions: ```gulp --cwd /path/to/your/openFrameworks/scripts/gulpOFPackageManager checkout```
* Search repo: ```gulp --cwd /path/to/your/openFrameworks/scripts/gulpOFPackageManager search --query ofxHttp```
* Install repo: ```gulp --cwd /path/to/your/openFrameworks/scripts/gulpOFPackageManager install --github bakercp/ofxHttp [--type lib]```
* Save ofPackage file: ```gulp --cwd /path/to/your/openFrameworks/scripts/gulpOFPackageManager save```

Example
---
The script parses an ofPackage.json file.
```js
{
	"addons": [{
		"url": "https://github.com/kylemcdonald/ofxCv.git",
		"checkout": "develop"
	}, {
		"url": "https://github.com/danomatika/ofxMidi.git",
		"checkout": "4e92269cf419d7cade46911fc0e768acd54e1969"
	}, {
		"github": "bakercp/ofxIO"
	}],
  "libs": [
    {
      "url": "https://github.com/nlohmann/json"
    }
  ]
}
```

Dependencies
---
* node.js

TODO:
---
* Make sure clone task is finished and add as dependencies for checkout task
* Install addon dependencies, need to parse addon_config.mk or add a json based addon config
* npm-like functionalities: install, installSave, uninstall, uninstallSave, ...
* Update/generate addons.make with local paths
* Delete local_addons and libs if already exist
* command line args for e.g. package file
* Use gulp-promt for interactive mode

License
---
This software is distributed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

Copyright (c) 2016 Thomas Geissl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Changelog
---
