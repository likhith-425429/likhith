
export type userInput = {
    userprompt:string,
    // start:string,
    // deadline:string
}
export type fromAPI = {
    project_plan: projectPlanType[]
}
export type projectPlanType = {
    id:number,
    task_name:string,
    description:string,
    dependencies:number[],
    duration_days:number,
    start_date:string,
    end_date:string,
    suggested_tools:string[]
}
export type SaveTodb = {
    title:string,
    prompt:string,
    subtasks: projectPlanType[],
}

