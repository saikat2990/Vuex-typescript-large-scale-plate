<template>
    <main class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Employee Details</div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">ID :</label>
                                <div class="col-md-6">{{employeeId}}</div>
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Name :</label>
                                <div class="col-md-6">{{employeeName}}</div>
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Details :</label>
                                <div class="col-md-6"></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</main>
</template>
<script lang="ts" src="./employeeDetails.ts"></script>
<style scoped src='./employeeCreate.css'></style>