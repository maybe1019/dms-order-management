<template>
    <div>
        <div class="px-[120px] ">
            <ul class=" 
                          nav nav-tabs nav-justified
                          flex flex-row
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
                              max-w-[200px]

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
                            " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#main-info" role="tab" aria-controls="tabs-homeJustify" aria-selected="true">Main Information</a>
                    
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
                            " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#task-information" role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">Tasks information</a>
                    
    
                </li>
    
    
                

                
                
            </ul>
        </div>
    <hr class="mt-0"/>

    
        <div class="tab-content mx-auto fex-auto ">
            <div class="tab-pane fade show active" id="main-info" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
                <MainInformationVue/>
            </div>
            <div class="tab-pane fade" id="task-information" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
                <CtaskInformation/>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import MainInformationVue from './MainInformation.vue';
import CtaskInformation from './CtaskInformation.vue';
export default {
    name: "PotailTabs",
    props:["user"],
    components: {
        
           MainInformationVue,
        CtaskInformation
    }
};
</script>

<style scoped>

</style>
