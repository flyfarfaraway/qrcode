import {
    AbstractSerializable, AbstractStorageStrategy, SmallStorage
} from '../../shared';

interface IDebugEnv {
    layout: boolean;
    socket: boolean;
}

export class DebugEnvStorage extends SmallStorage<IDebugEnv> {
    constructor() {
        super("debug");
    }

    get socket() {
        return this.data.socket;
    }

    Update(layout: boolean, socket: boolean) {
        this.data.layout = layout;
        this.data.socket = socket;
        this.SaveData();
    }

}