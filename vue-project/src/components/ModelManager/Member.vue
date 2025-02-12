<script setup lang="ts">
import Member from '@/Models/Member';
import { ref } from 'vue';

const members = defineModel<Member[]>("members");

const create_session = ref<boolean>(false);
const modify_session = ref<boolean>(false);
const selected = ref<Member>();
const newName = ref<string>('');

const createFunc = async(name: string) => {
    let member = new Member();
    await member.create(name);
}
</script>

<template>
    <div>
        <select id="member_id" v-model="selected">
            <option selected>--select--</option>
            <option v-for="member in members" v-bind:value="member">
                {{ member.name }}
            </option>
        </select>
    </div>

    <dialog v-show="create_session">
        <div class="header">
            <slot name="header">Create Member</slot>
        </div>
        <div>
            <slot>
                <input type="text" v-model="newName">
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
            <slot name="header">Modify Member</slot>
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