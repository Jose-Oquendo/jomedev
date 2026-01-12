<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from '../../stores/Main';

const main = useMainStore();
const skills = ref({});

onMounted(async () => {
  skills.value = await main.getSkills();
  await main.initCharts();
});
</script>
<template lang="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="text-blue-600 font-bold tracking-wide uppercase text-sm">Expertise</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Habilidades y Stack Tecnológico
        </h3>
        <p class="mt-4 max-w-3xl text-lg text-slate-500">
          Más allá de las herramientas, analizo cómo distribuyo mi enfoque y dónde aporto mayor valor.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Chart 1: Time Allocation -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h4 class="text-lg font-bold text-slate-800 mb-2">Distribución de Enfoque Técnico</h4>
          <p class="text-sm text-slate-500 mb-6">Dónde paso la mayor parte de mi tiempo durante el ciclo de desarrollo.
          </p>

          <div class="chart-container">
            <canvas id="skillsChart"></canvas>
          </div>
        </div>

        <!-- Textual Stack List (Categorized) -->
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center text-xl font-bold text-slate-900 mb-4">
              <span class="icon-sm mr-2">💻</span> Frontend & UI
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="front in skills.frontend" class="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700 font-mono">{{ front }}</span>
            </div>
          </div>
          <div>
            <h4 class="flex items-center text-xl font-bold text-slate-900 mb-4">
              <span class="icon-sm mr-2">⚙️</span> Backend & Database
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="back in skills.backend" class="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700 font-mono">{{ back }}</span>
            </div>
          </div>

          <div>
            <h4 class="flex items-center text-xl font-bold text-slate-900 mb-4">
              <span class="icon-sm mr-2">🚀</span> DevOps & Tools
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in skills.tools" class="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700 font-mono">{{ tool }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="">

</style>