<template>
    <div>
        <div class="row">
            <div class="col"> <h3>Employee List</h3></div>
            <div class="col float-left">    
                <div>
                    <router-link to="/employeeCreate"> Employee Create</router-link>
                </div>
            </div>
        </div>
        <div class="list-group"  >
            <div v-for="employee in employeeList" :key="employee.id">
                <a  @click="renderElement(employee.id)" class="list-group-item list-group-item-action">
                    {{employee.name}}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang='ts' src='./employee.ts'></script>
<style scoped src=""></style>