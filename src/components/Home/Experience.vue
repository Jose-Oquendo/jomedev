<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from '../../stores/Main';

const main = useMainStore();

</script>
<template lang="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-blue-600 font-bold tracking-wide uppercase text-sm">Trayectoria Profesional</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Línea de Tiempo de Experiencia Clave
        </h3>
        <p class="mt-4 text-xl text-slate-500">
          Pasa el cursor sobre los puntos para ver una breve descripción del rol.
        </p>
      </div>

      <!-- Horizontal Timeline Structure -->
      <div class="timeline-wrapper scrollable">
        <div class="timeline-line relative w-full flex justify-between items-center" style="min-width: 800px;">

          <!-- Item 1: Junior Role -->
          <div class="timeline-point-container" style="left: 5%;">
            <div class="timeline-label-top">Programador Junior</div>
            <div class="timeline-dot" data-description="Primeros pasos en desarrollo web (WordPress, JS Vanilla).">
            </div>
            <div class="timeline-tooltip">Primeros pasos en desarrollo web (WordPress, JS Vanilla).</div>
            <div class="timeline-label-bottom text-sm font-mono">2022 - 2023</div>
          </div>

          <!-- Item 2: Mid-Level Role -->
          <div class="timeline-point-container" style="left: 35%;">
            <div class="timeline-label-top">Programador de sistemas</div>
            <div class="timeline-dot"
              data-description="Construcción de plataforma Fintech con React y Node. Mejora de rendimiento UI."></div>
            <div class="timeline-tooltip">Construcción de plataforma Fintech con React y Node. Mejora de rendimiento UI.
            </div>
            <div class="timeline-label-bottom text-sm font-mono">2023 - 2025</div>
          </div>

          <!-- Item 3: Senior Role -->
          <div class="timeline-point-container" style="left: 65%;">
            <div class="timeline-label-top">Ingeniero de desarrollo</div>
            <div class="timeline-dot"
              data-description="Líder de migración a Serverless (AWS). Optimización CI/CD y mentoría."></div>
            <div class="timeline-tooltip">Líder de migración a Serverless (AWS). Optimización CI/CD y mentoría.</div>
            <div class="timeline-label-bottom text-sm font-mono">2025 - Presente</div>
          </div>
        </div>
      </div>

      <div class="text-center mt-20">
        <p class="text-slate-500 text-base">
          Esta línea de tiempo destaca los hitos principales. Para el historial completo de responsabilidades, por favor
          descarga mi CV.
        </p>
      </div>
    </div>
</template>
<style lang="">

</style>