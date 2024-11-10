<script setup>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import FloatLabel from 'primevue/floatlabel';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

import { ref } from 'vue';
import { reactive } from 'vue';

const checked1 = ref(true);
const form = reactive({
    email: '',
    password: '',
});
</script>
<template>
    <div
        class="min-h-screen justify-center bg-[url('@/assets/img/loginBg.jpeg')] bg-cover bg-center bg-surface-50 dark:bg-surface-950 px-3 py-5 md:px-12 lg:px-20">
        <div class="flex justify-between">
            <img class="h-24 w-32 m-2" src="@/assets/img/app-logo.png" alt="application logo">
            <div>
                <Button class="m-1" label="FR" severity="secondary" text />
                <Button class="m-1" label="AR" severity="secondary" text />
            </div>
        </div>
        <div class="bg-surface-0 dark:bg-surface-900 shadow rounded-border w-full lg:w-6/12 mx-auto">
            <div class="bg-black text-center px-6 py-10">
                <div class="text-white dark:text-surface-0 text-3xl font-medium mb-4">“La gloire d'un bon avocat
                    consiste à gagner de mauvais procès.”</div>
                <span class="text-surface-600 dark:text-surface-400 font-medium leading-normal">Honoré de Balzac</span>
            </div>

            <div class="p-6">
                <form v-on:submit.prevent="authStore.login(form)">
                    <FloatLabel>
                        <InputText id="email1" v-model="form.email" />
                        <label for="email1">Email</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="password1" type="password" v-model="form.password" />
                        <label for="password1">Password</label>
                    </FloatLabel>

                    <div class="flex items-center justify-between mb-12">
                        <div class="flex items-center">
                            <Checkbox id="rememberme1" v-model="checked1" :binary="true" class="mr-2" />
                            <label for="rememberme1">Remember me</label>
                        </div>
                        <a class="font-medium no-underline ml-2 text-primary text-right cursor-pointer">Forgot
                            password?</a>
                    </div>

                    <Button type="submit" label="Sign In" icon="pi pi-user" class="w-full" />

                </form>
            </div>
        </div>
    </div>
</template>
