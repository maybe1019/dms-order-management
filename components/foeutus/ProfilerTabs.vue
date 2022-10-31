<template>
    <div class="mx-auto">
        <div class="px-[200px] ">
            <ul class="
                              nav nav-tabs nav-justified
                              flex 
                              md:flex-row
                              list-none
                              border-b-0
                              pl-0
                              mb-0
                              justify-center
                              items-center
                            " id="tabs-tabJustify" role="tablist">
                <li class="nav-item flex-grow text-center" role="presentation">
                    <a href="#main-info" class="
                                  nav-link
                                  w-full
                                  block
                                  font-roboto
                                  !font-[400]
                                  
                                  text-[11px]
                                  
                                  !leading-[12.89px]
                                  uppercase
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-6
                                  py-3
                                  my-0
                                  focus:border-transparent
                                  active
                                  max-w-[200px]
                                " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#main-info" role="tab" aria-controls="tabs-homeJustify" aria-selected="true">Main Information</a>
    
                </li>
                <li class="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-profileJustify" class="
                                  nav-link
                                  w-full
                                  block
                                  font-roboto
                                    !font-[400]
                                  
                                  text-[11px]
                                  
                                  !leading-[12.89px]
                                  uppercase
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-6
                                  py-3
                                  my-0
                                  max-w-[200px]
    
                                  focus:border-transparent
                                " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#setting" role="tab" aria-controls="tabs-profileJustify" aria-selected="false"> 
                                                  Settings</a>
    
    
                </li>
                <li class="nav-item flex-grow text-center" role="presentation" v-show="this.user === 'admin'">
                    <a href="#tabs-messagesJustify" class="
                                  nav-link
                                  w-full
                                  block
                                 font-roboto
                                    !font-[400]
                                  
                                  text-[11px]
                                  
                                  !leading-[12.89px]
                                  uppercase
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-6
                                  py-3
                                  my-0
                                  max-w-[200px]
    
                                  focus:border-transparent
                                " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#permission" role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">Permissions</a>
    
    
                </li>
    
    
                <li class="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-messagesJustify" class="
                                  nav-link
                                  w-full
                                  block
                                 font-roboto
                                    !font-[400]
                                  
                                  text-[11px]
                                  
                                  !leading-[12.89px]
                                  uppercase
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-6
                                  py-3
                                  my-0
                                  max-w-[200px]
    
                                  focus:border-transparent
                                " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#bill" role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">Billing Info</a>
    
    
                </li>
    
                <li class="nav-item flex-grow text-center" role="presentation" v-show="this.user === 'client'">
                    <a href="#tabs-messagesJustify" class="
                                  nav-link
                                  w-full
                                  block
                                 font-roboto
                                    !font-[400]
                                  
                                  text-[11px]
                                  
                                  !leading-[12.89px]
                                  uppercase
                                  border-x-0 border-t-0 border-b-2 border-transparent
                                  px-6
                                  py-3
                                  my-0
                                  max-w-[200px]
    
                                  focus:border-transparent
                                " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#sub-user" role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">Sub-users</a>
    
    
                </li>
    
    
            </ul>
        </div>
        <hr class="mt-0" />
    
    
        <div class="tab-content  mx-auto flex-auto">
            <div class="tab-pane fade show active" id="main-info" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
                <UserMainInfo/>
            </div>
            <div class="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
                <UserSettingSecure/>
            </div>
            <div class="tab-pane fade" id="permission" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
                <UserPermissions/>
            </div>
    
    
    
    
    
            <div class="tab-pane fade" id="bill" role="tabpanel" aria-labelledby="tabs-profile-tabJustify" v-if="user == 'client' || user =='reseller'" >
                <ClientBillInfo/>
            </div>
            <div class="tab-pane fade" id="bill" role="tabpanel" aria-labelledby="tabs-profile-tabJustify" v-if="user!='client' && user !='reseller'">
                <UserBillInfo :user="user"/>
            </div>
            <div class="tab-pane fade" id="sub-user" role="tabpanel" aria-labelledby="tabs-profile-tabJustify" v-if="user=='client'">
                <ClientSubUser/>
            </div>
    
        </div>
    </div>
</template>

<script>
import ClientSubUser from "./ClientSubUser.vue"
import ClientBillInfo from "./ClientBillInfo.vue";
import UserMainInfo from "./UserMainInfo.vue"
import UserSettingSecure from "./UserSettingSecure.vue"
import UserPermissions from "./UserPermissions.vue";
import UserBillInfo from "./UserBillInfo.vue"
export default {
    name: "ProfilerTabs",
    props: ["user"],
    components: {
        UserMainInfo,
        UserSettingSecure,
        UserPermissions,
        UserBillInfo,
        ClientBillInfo,
        ClientSubUser
    }
};
</script>

<style scoped>

</style>
