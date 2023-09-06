<template>
  <!--  <nav class="bg-white border-gray-200 px-2">-->
  <!--    <div class="container mx-auto flex flex-wrap items-center justify-between">-->
  <!--      <a href="#" class="flex">-->
  <!--        <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"/><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"/><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"/></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"/></clipPath></defs></svg>-->
  <!--        <span class="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>-->
  <!--      </a>-->
  <!--      <div class="hidden md:block w-full md:w-auto" id="mobile-menu">-->
  <!--        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">-->
  <!--          <li>-->
  <!--            <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Pricing</a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->
  <t-button theme="primary">
    <template #icon><add-icon /></template>
    新建
  </t-button>
  <div>
    <a class="nes-btn" href="#">Normal</a>

    <button type="button" class="nes-btn is-primary ">Primary</button>
    <button type="button" class="nes-btn is-success">Success</button>
    <button type="button" class="nes-btn is-warning">Warning</button>
    <button type="button" class="nes-btn is-error">Error</button>
    <button type="button" class="nes-btn is-disabled">Disabled</button>

    <label class="nes-btn">
      <span>Select your file</span>
      <input type="file">
    </label>
    <div class="nes-field">
      <label for="name_field">Your name</label>
      <input type="text" id="name_field" class="nes-input">
    </div>

    <div class="nes-field is-inline">
      <label for="inline_field">.input.is-success</label>
      <input type="text" id="inline_field" class="nes-input is-success" placeholder="NES.css">
    </div>

    <div class="nes-field">
      <label for="warning_field">.input.is-warning</label>
      <input type="text" id="warning_field" class="nes-input is-warning" placeholder="8bit.css">
    </div>
    <div class="flex justify-center p-4">
      <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Show modal
      </button>
    </div>

    <div id="modal" tabindex="-1" aria-hidden="true"
         class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              Terms of Service
            </h3>
            <button id="closeButton" data-modal-hide="modal" type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              I accept
            </button>
            <button type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<style scoped>

</style>