import {Moment} from 'moment';
import {taskStatus} from '../enums/taskStatus.enum'

export class Task{
    /**
     * 任务Id
    */
    taskId:number;
    /**
     * 任务名称
     */
    taskName:string;
    /**
     * 任务描述（简介）
     */
    taskDesc:string;
    /**
     * 任务详情
     */
    taskDetail:string;
    /**
     * 任务时间
     */
    taskTime:Moment;
    /**
     * 任务创建时间
     */
    createTime:Moment;
    /**
     * 执行时间
     */
    exeTime?:Moment;
    /**
     * 废除时间
     */
    invalidTime?:Moment;
    /**
     * 任务状态
     */
    taskStatus:taskStatus;

}