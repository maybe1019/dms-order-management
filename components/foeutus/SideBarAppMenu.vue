<template>
    <nav aria-label="Sidebar" class="md:block w-[110px] md:flex-shrink-0 md:white md:overflow-y-auto  ">
        <div class="flex justify-center  border-r border-gray-light py-10 space-y-5 items-center h-screen pr-[0.375rem] ">
    
            <div class="flex flex-col justify-center items-center">
                <div class="flex w-full items-center justify-center pl-[1.125rem]">
                    <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
                </div>
    
                <AccountMenuItem />
    
    
                <div class=" flex w-full h-1 items-center justify-center pl-[1.125rem]">
                    <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
                </div>
    
                <ServiceMenuItem />
    
                <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                    <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
                </div>
    
                <WorkflowMenuItem />
    
                <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                    <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
                </div>
    
    
                <UserManagementMenuItem :route="'user-management'" />
    
                <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                    <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
                </div>
            </div>
    
    
        </div>
    </nav>
</template>

<script>
import AccountMenuItem from "./../embrillons/AccountMenuItem.vue";
import ServiceMenuItem from "./../embrillons/ServiceMenuItem.vue";
import WorkflowMenuItem from "./../embrillons/WorkflowMenuItem.vue";
import UserManagementMenuItem from "./../embrillons/UserManagementMenuItem.vue";
export default {
    name: "SidebarAppMenu",
    components: {
        UserManagementMenuItem,
        WorkflowMenuItem,
        ServiceMenuItem,
        AccountMenuItem,
    },
    computed: {
        currentRoute() {
            return 'user-managment';
            // return this.$route.name;
        },
    },
};
</script>
