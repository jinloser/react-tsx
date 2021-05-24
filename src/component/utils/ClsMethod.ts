export default class ClsMethod {
    private static MethodSet = {};
    public static register(cls: any) {
        this.MethodSet[cls.uuid] = cls;
    }
    public static unRegister(cls: any) {
        delete this.MethodSet[cls.uuid];
    }
    public static replaceRegister(oldUUID: string, newUUID: string) {
        if (newUUID === oldUUID) return;
        this.MethodSet[newUUID] = this.MethodSet[oldUUID];
        delete this.MethodSet[oldUUID];
    }
    public static getClass(uuid: string) {
        return this.MethodSet[uuid];
    }
}