Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var LocalLauncher = /** @class */ (function () {
    function LocalLauncher(pathToPackageJson) {
        if (pathToPackageJson === void 0) { pathToPackageJson = './package.json'; }
        pathToPackageJson = path.resolve(pathToPackageJson);
        this.spec = require(pathToPackageJson);
        this.root = path.dirname(pathToPackageJson);
    }
    LocalLauncher.prototype.getAllEngineVersions = function () {
        return _a = {},
            _a[this.spec.version] = {
                version: this.spec.version,
                root: this.root,
            },
            _a;
        var _a;
    };
    LocalLauncher.prototype.getInstalledTools = function () {
        return [];
    };
    return LocalLauncher;
}());
exports.LocalLauncher = LocalLauncher;
;
