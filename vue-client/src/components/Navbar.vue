<template>
    <nav>
        <!-- Top Language Bar -->
        <div class="flex justify-end px-1 my-2">
            <SelectButton v-model="currentLanguage" :options="languageOptions" class="p-buttonset-sm" />
        </div>

        <!-- Main Toolbar -->
        <div class="w-full px-12 py-1 flex justify-end items-center space-x-5">
            <!-- Notifications -->
            <OverlayBadge value="2">
                <i class="pi pi-envelope text-surface-500" style="font-size: 1.75rem" />
            </OverlayBadge>
            <OverlayBadge value="4" severity="danger">
                <i class="pi pi-calendar text-surface-500" style="font-size: 1.75rem" />
            </OverlayBadge>
            <OverlayBadge severity="danger">
                <i class="pi pi-bell text-surface-500" style="font-size: 1.75rem" />
            </OverlayBadge>

            <Avatar :image="userAvatar" shape="circle" size="xlarge" v-tooltip.bottom="'John Doe'" />
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import SelectButton from 'primevue/selectbutton'
import { OverlayBadge } from 'primevue';
import Avatar from 'primevue/avatar'
// Language toggle
const currentLanguage = ref('fr')

const languageOptions = ref(['Fr', 'Ar'])

// Avatar image
const userAvatar = ref(new URL('@/assets/img/profile.png', import.meta.url).href)

// Define emits
//const emit = defineEmits(['change-language'])
</script>

<style scoped>
:deep(.p-button-text) {
    @apply hover:bg-gray-100;
}

:deep(.p-button.p-button-text) {
    color: #64748b;
    /* Tailwind slate-500 */
}

:deep(.p-button.p-button-text:hover) {
    background: #f1f5f9;
    /* Tailwind slate-100 */
}

:deep(.p-button-sm) {
    font-size: 0.875rem;
    padding: 0.4rem 0.8rem;
}
</style>