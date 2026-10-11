import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '~/server/trpc/routers';

export type RouterOutput = inferRouterOutputs<AppRouter>;
export type RouterInput = inferRouterInputs<AppRouter>;

export type TUserLogin = RouterOutput['user']['login'];

export type TRole = 'admin' | 'club';

export interface TArgument {
    id: number;
    title: string;
    content?: string;
    // ?
    rootArchives: number[] | null; // id of the root archive point? but title-only arguments have no root point (maybe a draft point)
}

export interface TArgumentArchive {
    id: number;
    originId: number;
    nextArchives?: number[]; // id of next archive points
    title: string;
    content?: string;
    changelog: string;
    timestamp: Date;
    isDraft: boolean; // true --> draft archive
}