<script setup lang="ts">
import HouseWork from '@/Models/HouseWork';
import HouseWorkManager from '@/Models/Manager';
import Member from '@/Models/Member';
import Work from '@/Models/Work';
import { ref } from 'vue';
import datepicker from 'vue3-datepicker';

const props = defineProps<{
    members: Member[],
    works: Work[],
    currentdate: Date | undefined
}>()

const houseworks = defineModel<HouseWork[]>("houseworks");
const manager = HouseWorkManager;

const create_session = ref<boolean>(false);
const modify_session = ref<boolean>(false);
const memberselected = ref<Member>();
const workselected = ref<Work>();
const memberid = ref<string>('');
const workid = ref<string>('');
const picked = ref<Date>(new Date());
const selected = ref<HouseWork>();

const createFunc = async() => {
    let work = new HouseWork();
    await work.create(parseInt(workid.value), parseInt(memberid.value), picked.value.valueOf());
}

const modifyFunc = async() => {
    if (selected.value) {
        let oldHousework = selected.value;
        selected.value.ownerId = memberselected.value?.id;
        selected.value.workId = workselected.value?.id;
        selected.value.date = picked.value.valueOf();
        let result = await selected.value.modify();
        if (result === false) {
            selected.value = oldHousework;
        }
    }
}
</script>

<template>
    <div>
        <div style="display: inline-flex;flex-direction: row;">
            <a>Work</a>
            <a>Owner</a>
        </div>
        <div v-for="detail in manager.HouseWorkDetails" style="display: inline-flex;flex-direction: row;">
            <a>{{ detail.workname }}</a>
            <a>{{ detail.ownername }}</a>
            <div>modify</div>
            <div>delete</div>
        </div>
    </div>

    <dialog v-show="create_session">
        <div class="header">
            <slot name="header">Create House Work</slot>
        </div>
        <div>
            <slot>
                <label>成員</label>
                <select type="text" v-model="memberselected">
                    <option v-for="member in props.members" :key="member.id" :value="member">{{ member.name }}</option>
                </select>
            </slot>
        </div>
        <div>
            <slot>
                <label>工作</label>
                <select type="text" v-model="workselected">
                    <option v-for="work in props.works" :key="work.id" :value="work">{{ work.name }}</option>
                </select>
            </slot>
        </div>
        <div>
            <label>日期</label>
            <datepicker v-model="picked"/>
        </div>
        <div class="footer">
            <slot>
                <buttin class="btn" @click="createFunc()">Confirm</buttin>
            </slot>
            <slot>
                <button class="btn" @click="create_session = false">CLOSE</button>
            </slot>
        </div>
    </dialog>

    <dialog v-show="modify_session">
        <div class="header">
            <slot name="header">Modify House Work</slot>
        </div>
        <div>
            <slot>
                <label>成員</label>
                <select type="text" v-model="memberselected">
                    <option v-for="member in props.members" :key="member.id" :value="member">{{ member.name }}</option>
                </select>
            </slot>
        </div>
        <div>
            <slot>
                <label>工作</label>
                <select type="text" v-model="workselected">
                    <option v-for="work in props.works" :key="work.id" :value="work">{{ work.name }}</option>
                </select>
            </slot>
        </div>
        <div>
            <label>日期</label>
            <datepicker v-model="picked"/>
        </div>
        <div class="footer">
            <slot>
                <button class="btn" @click="modifyFunc()">Confirm</button>
            </slot>
            <slot>
                <button class="btn" @click="modify_session = false">CLOSE</button>
            </slot>
        </div>
    </dialog>
</template>