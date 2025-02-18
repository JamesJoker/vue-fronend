<script setup lang="ts">
import { ref } from 'vue';

const month = ref<string[][]>([...Array(6)].map(_=>Array(7).fill('')))
const currentMonth = new Date().getMonth();
const date = new Date(new Date().getFullYear(), currentMonth, 1)
const days = ref<number>(0);

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 7; j++) {
        if ((i === 0 && j < date.getDay()) ||
            (AddDays(date, days.value).getMonth() > currentMonth)) {
            month.value[i][j] = 'date-card-none'
        }
        else {
            month.value[i][j] = 'date-card'
            days.value = days.value + 1
        }
    }
}

function AddDays(date: Date, days: number){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

</script>

<template>
    <table style="border:1px solid black">
        <thead style="border:1px solid skyblue">
            <tr>
                <th value="0">
                    Sunday
                </th>
                <th value="1">
                    Monday
                </th>
                <th value="2">
                    Tuesday
                </th>
                <th value="3">
                    Wednesday
                </th>
                <th value="4">
                    Thursday
                </th>
                <th value="5">
                    Friday
                </th>
                <th value="6">
                    Saturday
                </th>
            </tr>
        </thead>
        <tbody style="border: 1px double black;">
            <tr value="1st">
                <td :class="month[0][0]" value="Sun"></td>
                <td :class="month[0][1]" value="Mon"></td>
                <td :class="month[0][2]" value="Tue"></td>
                <td :class="month[0][3]" value="Wed"></td>
                <td :class="month[0][4]" value="Thu"></td>
                <td :class="month[0][5]" value="Fri"></td>
                <td :class="month[0][6]" value="Sat"></td>
            </tr>
            <tr value="2nd">
                <td :class="month[1][0]" value="Sun"></td>
                <td :class="month[1][1]" value="Mon"></td>
                <td :class="month[1][2]" value="Tue"></td>
                <td :class="month[1][3]" value="Wed"></td>
                <td :class="month[1][4]" value="Thu"></td>
                <td :class="month[1][5]" value="Fri"></td>
                <td :class="month[1][6]" value="Sat"></td>
            </tr>
            <tr value="3rd">
                <td :class="month[2][0]" value="Sun"></td>
                <td :class="month[2][1]" value="Mon"></td>
                <td :class="month[2][2]" value="Tue"></td>
                <td :class="month[2][3]" value="Wed"></td>
                <td :class="month[2][4]" value="Thu"></td>
                <td :class="month[2][5]" value="Fri"></td>
                <td :class="month[2][6]" value="Sat"></td>
            </tr>
            <tr value="4th">
                <td :class="month[3][0]" value="Sun"></td>
                <td :class="month[3][1]" value="Mon"></td>
                <td :class="month[3][2]" value="Tue"></td>
                <td :class="month[3][3]" value="Wed"></td>
                <td :class="month[3][4]" value="Thu"></td>
                <td :class="month[3][5]" value="Fri"></td>
                <td :class="month[3][6]" value="Sat"></td>
            </tr>
            <tr value="5th">
                <td :class="month[4][0]" value="Sun"></td>
                <td :class="month[4][1]" value="Mon"></td>
                <td :class="month[4][2]" value="Tue"></td>
                <td :class="month[4][3]" value="Wed"></td>
                <td :class="month[4][4]" value="Thu"></td>
                <td :class="month[4][5]" value="Fri"></td>
                <td :class="month[4][6]" value="Sat"></td>
            </tr>
            <tr value="6th">
                <td :class="month[5][0]" value="Sun"></td>
                <td :class="month[5][1]" value="Mon"></td>
                <td :class="month[5][2]" value="Tue"></td>
                <td :class="month[5][3]" value="Wed"></td>
                <td :class="month[5][4]" value="Thu"></td>
                <td :class="month[5][5]" value="Fri"></td>
                <td :class="month[5][6]" value="Sat"></td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="css">
.week-title,
.date-card,
.date-card-none{
    width: 100px;
    height: 30px;
}

.date-card{
    padding: 1px;
    border: 2px double black;
    background-color: white;
    cursor: pointer;
}

.date-card-none{
    padding: 1px;
    background-color: lightgrey;
    cursor: default;
}
</style>