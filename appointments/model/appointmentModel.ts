export interface ILevelData {
  selected: any;
    departments: IDepartment[];
    floorArbName: string;
    floorId: number;
    floorName: string;
    orgId: number;
  }
  
  export interface IDepartment {
    deptArbName: string;
    deptId: number;
    deptName: string;
    deptType: number;
    floorId: number;
    orgId: number;
    services: IService[];
    status: number;
  }
  export interface IService {
    deptId: number;
    deptName: string;
    endToken: number;
    floorId: number;
    floorName: string;
    npEarlyCheckin: number;
    npLateCheckin: number;
    orgId: number;
    serviceArName: string;
    serviceEngName: string;
    serviceId: number;
    servicePrefix: string;
    serviceType: number;
    startToken: number;
    status: number;
  }