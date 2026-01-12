<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from '../stores/Main';

const main = useMainStore();
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

</script>
<template>
    <!-- Navigation -->
  <nav id="navbar" class="fixed top-0 w-full bg-transparent backdrop-blur-md shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0 flex items-center cursor-pointer" @click="main.scrollToSection('hero')">
          <!-- LOGO: JOM;DEV -->
          <span class="font-mono text-xl font-bold text-cyan-600"><img src="../assets/images/logorb.png" width="150" alt="logo"></span>
        </div>
        <div class="hidden md:flex space-x-8">
          <button @click="main.scrollToSection('projects')"
            class="text-slate-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyectos</button>
          <button @click="main.scrollToSection('skills')"
            class="text-slate-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Stack
            & Data</button>
          <button @click="main.scrollToSection('experience')"
            class="text-slate-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Experiencia</button>
          <button @click="main.scrollToSection('about')"
            class="text-slate-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre
            Mí</button>
          <button @click="main.scrollToSection('contact')"
            class="bg-sky-600 text-white hover:bg-sky-700 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">Contacto</button>
        </div>
        <!-- Mobile menu button placeholder (simplified for single file) -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu()" class="text-slate-500 hover:text-sky-600 p-2">
            <span class="icon-md">☰</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
        <button @click="main.scrollToSection('projects')"
          class="block w-full text-left text-slate-500 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium">Proyectos</button>
        <button @click="main.scrollToSection('skills')"
          class="block w-full text-left text-slate-500 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium">Stack
          & Data</button>
        <button @click="main.scrollToSection('experience')"
          class="block w-full text-left text-slate-500 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium">Experiencia</button>
        <button @click="main.scrollToSection('about')"
          class="block w-full text-left text-slate-500 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium">Sobre
          Mí</button>
        <button @click="main.scrollToSection('contact')"
          class="block w-full text-left text-blue-600 font-bold hover:bg-blue-50 px-3 py-2 rounded-md text-base">Contacto</button>
      </div>
    </div>
  </nav>
</template>
<style scoped>
    
</style>