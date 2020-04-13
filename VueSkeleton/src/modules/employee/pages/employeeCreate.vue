<template>    
<main class="my-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Employee Create</div>
                        <div class="card-body">
                            <form @submit="addemp" name="form">
                                <div class="form-group row">
                                    <label for="full_name" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <input type="text" id="name" v-model="newEmployee.name" class="form-control" name="name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="job" class="col-md-4 col-form-label text-md-right">Job</label>
                                    <div class="col-md-6">
                                        <input type="text" id="job" v-model="newEmployee.job" class="form-control" name="job">
                                    </div>
                                </div>
                                <div>
                                    <div class="col-md-6 offset-md-4">     
                                        <button type="submit" class="btn btn-primary">
                                            create 
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</main>
</template>
<script lang="ts" src='./employeeCreate.ts'></script>
<style scoped src='./employeeCreate.css'></style>