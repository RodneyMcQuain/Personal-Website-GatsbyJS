export interface IJob {
    id: string;
    company: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    city: string;
    state: string;
    notablePoints?: NotablePoints;
}

export type NotablePoints = string[];