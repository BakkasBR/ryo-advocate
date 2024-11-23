<script setup>
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

import { ref } from "vue";
import { reactive } from "vue";

const rememberMe = ref(true);
const form = reactive({
    email: "",
    password: "",
});
</script>
<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-12 min-h-screen bg-[url('@/assets/img/loginBg.jpeg')] bg-cover bg-center bg-surface-50 dark:bg-surface-950">
        <!-- Left Logo -->
        <div class="sm:col-span-2 flex flex-col justify-between px-6 sm:px-8 pt-4 sm:pt-8">
            <div class="flex items-center">
                <img src="@/assets/img/app-logo.png" alt="Logo" class="h-24 w-32" />
            </div>
        </div>

        <!-- Main Content -->
        <div class="sm:col-span-8 flex flex-col items-center justify-center">
            <div class="bg-surface-0 bg-opacity-50 dark:bg-surface-950 text-black rounded-lg shadow-lg max-w-xl w-full">
                <!-- Quote -->
                <div class="text-center bg-surface-950 p-10 rounded-t-md text-surface-50">
                    <p class="text-2xl font-semibold font-serif leading-10 mb-2">
                        “La gloire d'un bon avocat consiste à gagner de mauvais procès.”
                    </p>
                    <p class="text-sm italic text-surface-500 font-medium">
                        Honoré de Balzac
                    </p>
                </div>

                <!-- Form -->
                <div class="p-8">
                    <form v-on:submit.prevent="authStore.login(form)">
                        <div class="w-3/4 flex flex-col mx-auto">
                            <span class="block font-serif font-bold leading-7 mb-3 px-1">Authentification</span>
                            <InputText
                                class="rounded-none border-surface-500 w-full bg-opacity-50 decoration-gray-100 mb-3"
                                id="email" placeholder="Email" type="email" v-model="form.email" />
                            <InputText class="rounded-none border-surface-400 w-full bg-opacity-50 decoration-gray-100"
                                id="password" placeholder="Mot de passe" type="password" v-model="form.password" />

                            <div class="flex items-center mt-3 mb-8 px-1">
                                <div class="flex items-center">
                                    <Checkbox id="rememberme" v-model="rememberMe" :binary="true" class="mr-2"/>
                                    <label class="text-sm leading-4" for="rememberme">Me souvenir de moi</label>
                                </div>
                            </div>

                            <div class="mb-2">
                                <a class="text-sm text-secondary text-right no-underline ml-2 mb-2 cursor-pointer">Mot
                                    de
                                    passe oublier ?
                                </a>
                            </div>

                            <Button type="submit" label="Connecter" severity="contrast" icon="pi pi-user" class="w-full mb-2" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Right Language Switch -->
        <div class="sm:col-span-2 flex justify-center items-start pt-4 sm:pt-8">
            <div class="flex items-center gap-x-3">
                <Button class="px-2 py-1" label="FR" severity="secondary" size="small"/>
                <Button class="px-2 py-1" label="AR" severity="secondary" size="small"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.p-inputtext::placeholder {
    @apply text-sm;
}
</style>
