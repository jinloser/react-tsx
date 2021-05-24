import * as React from 'react';
import Dept from './Dept';
import Role from './Role';
import Tom from './Tom';
import Bill from './Bill';
import Alex from './Alex';
import TeamA from './TeamA';
import TeamB from './TeamB';
import Library from './Library';

/**模块切换管理 */
export default class ModuleManage {
    public static initModuleClass(name: string) {
        switch (name) {
            case 'Dept': return <Dept />
            case 'Role': return <Role />
            case 'Tom': return <Tom />
            case 'Bill': return <Bill />
            case 'Alex': return <Alex />
            case 'TeamA': return <TeamA />
            case 'TeamB': return <TeamB />
            case 'Library': return <Library />
        }
    }
}