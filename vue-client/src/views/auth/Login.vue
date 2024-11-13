<script setup>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

import { ref } from 'vue';
import { reactive } from 'vue';

const rememberMe = ref(true);
const form = reactive({
    email: '',
    password: '',
});
</script>
<template>
    <div
        class="min-h-screen justify-center bg-[url('@/assets/img/loginBg.jpeg')] bg-cover bg-center bg-surface-50 dark:bg-surface-950 px-3 py-5 md:px-12 lg:px-20">
        <div class="flex justify-between">
            <img class="h-20 w-28 m-2" src="@/assets/img/app-logo.png" alt="application logo">
            <div>
                <Button class="mx-2 px-2 py-1" label="FR" severity="secondary" text />
                <Button class="mx-2 px-2 py-1" label="AR" severity="secondary" text />
            </div>
        </div>
        <div class="bg-surface-0 bg-opacity-50 dark:bg-surface-900 shadow rounded-border w-full lg:w-6/12 mx-auto">
            <div class="bg-black text-center px-6 py-10">
                <div class="text-white dark:text-surface-0 text-3xl font-serif font-medium mb-4">“La gloire d'un bon avocat
                    consiste à gagner de mauvais procès.”</div>
                <span class="text-surface-600 dark:text-surface-400 font-medium leading-normal">Honoré de Balzac</span>
            </div>

            <div class="p-6">
                <h3 class="font-serif font-medium mb-2">Authentification</h3>

                <form v-on:submit.prevent="authStore.login(form)">
                    <FloatLabel variant="in" class="py-0">
                        <InputText class="w-full bg-opacity-50 decoration-gray-100" id="email1" v-model="form.email" />
                        <label for="email1">Email</label>
                    </FloatLabel>

                    <FloatLabel variant="in" class="mt-3 py-0">
                        <InputText class="w-full bg-opacity-50 decoration-gray-100" id="password1" type="password" v-model="form.password" />
                        <label for="password1">Password</label>
                    </FloatLabel>

                    <div class="flex items-center mt-3 mb-8 px-1">
                        <div class="flex items-center">
                            <Checkbox id="rememberme1" v-model="rememberMe" :binary="true" class="mr-2" />
                            <label for="rememberme1">Me souvenir de moi</label>
                        </div>
                    </div>
                    <div class="mb-2">
                        <a class="font-medium no-underline ml-2 mb-2 text-secondary text-right cursor-pointer">Mot de passe oublier ?</a>
                    </div>

                    <Button type="submit" label="Connecter" severity="contrast" icon="pi pi-user" class="w-full" />
                </form>
            </div>
        </div>
    </div>
</template>
