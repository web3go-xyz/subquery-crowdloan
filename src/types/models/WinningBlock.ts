// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';

export class WinningBlock implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public auctionId: string;

    public parachainId: string;

    public blockNum: number;

    public bidId: string;

    public slotStart: number;

    public slotEnd: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save WinningBlock entity without an ID");
        await store.set('WinningBlock', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove WinningBlock entity without an ID");
        await store.remove('WinningBlock', id.toString());
    }

    static async get(id:string): Promise<WinningBlock>{
        assert(id !== null, "Cannot get WinningBlock entity without an ID");
        const record = await store.get('WinningBlock', id.toString());
        if (record){
            return WinningBlock.create(record);
        }else{
            return;
        }
    }

    static create(record){
        let entity = new WinningBlock(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
