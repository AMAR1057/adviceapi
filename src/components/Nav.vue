<template  >
<div class="bg-pink-200 text-pink-700">
    <div class="container mx-auto flex items-center justify-between  bg-pink-200">
    <h1 class=" tracking-tighter text-3xl font-thin">Basic<span class="font-normal">Router</span>
        </h1>
    <nav>
        <ul class="flex space-x-4 w-full ">
       <router-link to="/">
        <li class="py-8 px-4 hover:cursor-pointer hover:bg-pink-900 hover:text-red-400"> 
             Home  
             </li>
             </router-link>
        <router-link :to="{name:'About'}"> 
        <li class= "py-8 px-4 hover:cursor-pointer hover:bg-pink-900 hover:text-red-400">
             About
             </li>
             </router-link>
         <router-link :to="{ path: '/hello', name: 'Hello'}">
         <li class= "py-8 px-4 hover:cursor-pointer hover:bg-pink-900 hover:text-red-400"> 
             Hello 
             </li>
             </router-link>
             
        </ul>
    </nav>
</div>
    </div>
</template>