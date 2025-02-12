<script setup lang="ts">
import Member from '@/Models/Member';
import Work from '@/Models/Work';
import { ref } from 'vue';

const props = defineProps<{
    members: Member[]
}>()

const works = defineModel<Work[]>("works");

const create_session = ref<boolean>(false);
const modify_session = ref<boolean>(false);
const selected = ref<Work>();
const newName = ref<string>('');
const memberids = ref<string[]>([]);
const frequency = ref<string>('');

const createFunc = async(name: string) => {
    let work = new Work();
    let ids: number[] = [];

    for (let id of memberids.value) {
        ids.push(parseInt(id));
    }

    await work.create(name, ids, frequency.value);
}
</script>

<template>
    <div>
        <select id="member_id" v-model="selected">
            <option selected>--select--</option>
            <option v-for="work in works" v-bind:value="work">
                {{ work.name }}
            </option>
        </select>
    </div>

    <dialog v-show="create_session">
        <div class="header">
            <slot name="header">Create Work</slot>
        </div>
        <div>
            <slot>
                <label for="workname">名稱</label>
                <input id="workname" type="text" v-model="newName">
            </slot>
            <slot>
                <label for="">成員</label>
                <div v-for="(value, key, index) in members" :key="index">
                    <input type="checkbox" :id="`${value.id}`" v-model="memberids">
                    <label :for="value.name">{{ value.name }}</label>
                </div>
            </slot>
            <slot>
                <label for="frequency-selector">週期</label>
                <select id="frequency-selector" v-model="frequency">
                    <option value="Daily">Day</option>
                    <option value="Weekly">Week</option>
                    <option value="Monthly">Month</option>
                </select>
            </slot>
        </div>
        <div class="footer">
            <slot>
                <buttin class="btn" @click="createFunc(newName)">Confirm</buttin>
            </slot>
            <slot>
                <button class="btn" @click="create_session = false">CLOSE</button>
            </slot>
        </div>
    </dialog>

    <dialog v-show="modify_session">
        <div class="header">
            <slot name="header">Modify Work</slot>
        </div>
        <div>
            <slot>
                <input type="text" v-model="selected?.name">
            </slot>
        </div>
        <div class="footer">
            <slot>
                <button class="btn" @click="selected?.modify()">Confirm</button>
            </slot>
            <slot>
                <button class="btn" @click="modify_session = false">CLOSE</button>
            </slot>
        </div>
    </dialog>
</template>