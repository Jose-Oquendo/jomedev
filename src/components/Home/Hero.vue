<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from '../../stores/Main';

const main = useMainStore();

</script>
<template lang="">
    <canvas id="heroCanvas" class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"></canvas>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            🚀 Disponible para nuevos retos
          </div>
          <h1 class="text-4xl tracking-tight font-extrabold text-cyan-500 mb-6">
            <span class="block">Hola, soy Juan José Oquendo Medina</span>
            <span class="block text-teal-600">Ingeniero de desarrollo</span>
          </h1>
          <h2 class="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Desarrollador Full Stack enfocado en la convergencia entre datos y diseño. Optimizo la experiencia del usuario mediante interfaces limpias, bases de datos robustas e integración estratégica de IA.
          </h2>
          <div id="heroactions" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button @click="main.scrollToSection('projects')"
              class="px-3 py-2 rounded-lg bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              Ver Proyectos Destacados
            </button>
            <button @click="main.getCV()"
              class="px-3 py-2 rounded-lg bg-white text-slate-700 font-semibold border border-slate-300 shadow-sm hover:bg-slate-50 transition-all">
              📄 Descargar CV
            </button>
            <div id="herocontacts" class="mt-2 flex justify-center lg:justify-start gap-6 text-slate-400">
              <a href="https://github.com/Jose-Oquendo" target="_blank" class="icon-md hover:text-slate-600 cursor-pointer" title="GitHub"><img src="../../assets/images/github.svg" alt="Descripción del gráfico" width="25"></a>
              <a href="https://www.linkedin.com/in/juan-josé-oquendo-medina-741980274" target="_blank" class="icon-md hover:text-slate-600 cursor-pointer" title="LinkedIn"><img src="../../assets/images/linkind.svg" alt="Descripción del gráfico" width="25"></a>
              <!-- <span class="icon-md hover:text-slate-600 cursor-pointer" title="Twitter">🐦</span> -->
            </div>
          </div>
        </div>
        <!-- Interactive Code Block Aesthetic -->
        <div class="hidden lg:block relative">
          <div class="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
          <div class="relative bg-slate-900 rounded-2xl p-6 shadow-2xl text-left border border-slate-700">
            <div class="flex gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre class="font-mono text-sm text-slate-300 overflow-x-auto">
<code><span class="text-purple-400">class</span> <span class="text-yellow-300">Developer</span> {
  <span class="text-blue-400">constructor</span>() {
    <span class="text-red-400">this</span>.name = <span class="text-green-400">"Juan José Oquendo Medina"</span>;
    <span class="text-red-400">this</span>.stack = [<span class="text-green-400">"VueJS"</span>, <span class="text-green-400">"PHP"</span>, <span class="text-green-400">"Node"</span>];
    <span class="text-red-400">this</span>.passion = <span class="text-green-400">"Problem Solving"</span>;
  }

  <span class="text-blue-400">buildFuture</span>() {
    <span class="text-purple-400">return</span> <span class="text-red-400">this</span>.innovate();
  }
}</code></pre>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="">
    
</style>