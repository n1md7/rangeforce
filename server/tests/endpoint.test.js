import dotenv from 'dotenv';

dotenv.config();

import config from '../src/config';
import {describe, expect, it} from '@jest/globals';
import App from '../src/server';
import axios from "axios";

describe("/api/v1/user", () => {

    config.server.port = 8889;
    let httpServer;
    const url = `http://localhost:${config.server.port}/api/v1`;
    const httpClient = axios.create({
        baseURL: url
    });

    beforeAll(async () => {
        httpServer = new App(config).init().start();
    });

    afterAll(() => {
        httpServer.close();
    });

    it('/api/v1/users should get users list', async () => {
        const users = await httpClient.get('/users');
        expect(users.data).toEqual(expect.any(Array));
        expect(users.status).toBe(200);
    });

    it('/api/v1/users/top should get users list', async () => {
        const users = await httpClient.get('/users/top');
        expect(users.data).toEqual(expect.objectContaining({
            topUsersByMonth: expect.any(Array),
            topUsersByWeek: expect.any(Array)
        }));
        // Max ranking list is no more then 5 records; default is 5
        expect(users.data.topUsersByMonth.length).toBeLessThanOrEqual(5);
        expect(users.data.topUsersByWeek.length).toBeLessThanOrEqual(5);
        expect(users.status).toBe(200);
    });

    it('/api/v1/users/top/{:number} should get users list', async () => {
        const top = 1;
        const users = await httpClient.get(`/users/top/${top}`);
        expect(users.data).toEqual(expect.objectContaining({
            topUsersByMonth: expect.any(Array),
            topUsersByWeek: expect.any(Array)
        }));
        // Max ranking list is no more then {top} records
        expect(users.data.topUsersByMonth.length).toBeLessThanOrEqual(top);
        expect(users.data.topUsersByWeek.length).toBeLessThanOrEqual(top);
        expect(users.status).toBe(200);
    });
});

describe("/api/v1/modules", () => {

    config.server.port = 8889;
    let httpServer;
    const url = `http://localhost:${config.server.port}/api/v1`;
    const httpClient = axios.create({
        baseURL: url
    });

    beforeAll(async () => {
        httpServer = new App(config).init().start();
    });

    afterAll(() => {
        httpServer.close();
    });

    it('/api/v1/modules should get modules list', async () => {
        const modules = await httpClient.get('/modules');
        expect(modules.data).toEqual(expect.any(Array));
        expect(modules.status).toBe(200);
    });

    it('/api/v1/modules/top should get modules top list', async () => {
        const modules = await httpClient.get('/modules/top');
        expect(modules.data).toEqual(expect.objectContaining({
            modules: expect.any(Array),
            total: expect.any(Number)
        }));
        // Max ranking list is no more then 10 records; default is 10
        expect(modules.data.modules.length).toBeLessThanOrEqual(10);
        expect(modules.status).toBe(200);
    });

    it('/api/v1/modules/top/{:number} should get modules list', async () => {
        const top = 2;
        const modules = await httpClient.get(`/modules/top/${top}`);
        expect(modules.data).toEqual(expect.objectContaining({
            modules: expect.any(Array),
            total: expect.any(Number)
        }));
        // Max ranking list is no more then {top} records
        expect(modules.data.modules.length).toBeLessThanOrEqual(top);
        expect(modules.status).toBe(200);
    });
});