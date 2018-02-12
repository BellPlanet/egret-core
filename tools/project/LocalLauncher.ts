import path = require('path');

type InstalledToolsSpec = {
    name: string,
    version: string,
    path: string,
};

export class LocalLauncher {

    private root: string;
    private spec: { version: string };

    constructor(pathToPackageJson: string = './package.json') {
        pathToPackageJson = path.resolve(pathToPackageJson);
        this.spec = require(pathToPackageJson);
        this.root = path.dirname(pathToPackageJson);
    }

    public getAllEngineVersions(): any {
        return {
            [this.spec.version]: {
                version: this.spec.version,
                root: this.root,
            },
        };
    }

    public getInstalledTools(): InstalledToolsSpec[] {
        return [];
    }

};
