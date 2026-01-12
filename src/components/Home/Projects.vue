<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from '../../stores/Main';

const main = useMainStore();
const projectsData = ref([]);

async function filterProjects(category = 'all') {
  main.category = category
  projectsData.value = await main.getProjects();
}

async function openModal(project) {
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-problem').textContent = project.problem;
  document.getElementById('modal-solution').textContent = project.solution;

  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.tags.map(tag =>
    `<span class="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-700 font-mono">${tag}</span>`
  ).join('');
  
  const modal = document.getElementById('projectModal');
  modal.classList.remove('hidden');

  document.getElementById('modal-live').classList.remove('hidden');
  if(project.links.live == '#'){
    document.getElementById('modal-live').classList.add('hidden');
  }
}

function closeModal() {
  document.getElementById('projectModal').classList.add('hidden');
}

onMounted(async () => {
  await filterProjects();
});

</script>
<template lang="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-blue-600 font-bold tracking-wide uppercase text-sm">Portafolio</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Proyectos Destacados
        </h3>
        <p class="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          Una selección de retos técnicos donde el enfoque estuvo en resolver problemas reales de negocio mediante
          arquitectura robusta y UX intuitiva.
        </p>
      </div>

      <!-- Filters -->
      <div class="flex justify-center gap-4 mb-12 flex-wrap">
        <button @click="filterProjects('all')"
          class="project-filter active px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors" :class="category == 'all' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'">Todos</button>
        <button @click="filterProjects('frontend')"
          class="project-filter px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors" :class="category == 'frontend' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'">Frontend</button>
        <button @click="filterProjects('backend')"
          class="project-filter px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors" :class="category == 'backend' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'">Backend</button>
      </div>
      <div id="projectsGrid" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projectsData" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
          <div class="p-6 flex-1">
              <div class="flex justify-between items-start mb-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {{project.role}}
                  </span>
                  <span class="text-slate-400 text-xs uppercase tracking-wide font-bold">{{project.category}}</span>
              </div>  
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{project.title}}</h3>
              <p class="text-slate-500 text-sm line-clamp-3 mb-4">{{project.problem}}</p>
              <div class="flex flex-wrap gap-2 mt-auto">
                  <span v-for="tag in project.tags" class="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{{ tag }}</span>
              </div>
          </div>
          <div class="bg-slate-50 px-6 py-4 border-t border-slate-100">
              <button @click="openModal(project)" class="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center group">
                  Ver Caso de Estudio 
                  <span class="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL (Hidden by default) -->
  <div id="projectModal" class="fixed inset-0 z-[60] hidden overflow-y-auto" aria-labelledby="modal-title" role="dialog"
    aria-modal="true">
    <!-- Backdrop -->
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" aria-hidden="true"
        @click="closeModal()"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!-- Content -->
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl leading-6 font-bold text-slate-900" id="modal-title">Project Title</h3>
                <button @click="closeModal()"
                  class="text-slate-400 hover:text-slate-600 text-2xl font-bold">&times;</button>
              </div>

              <div class="mt-4 space-y-4">
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 class="font-bold text-blue-900 text-sm uppercase">El Problema</h4>
                  <p id="modal-problem" class="text-blue-800 text-sm mt-1">Problem description...</p>
                </div>

                <div>
                  <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">La Solución</h4>
                  <p id="modal-solution" class="text-slate-600 text-sm">Solution details...</p>
                </div>

                <div>
                  <h4 class="font-bold text-slate-900 text-sm uppercase mb-2">Tecnologías</h4>
                  <div id="modal-tech" class="flex flex-wrap gap-2">
                    <!-- Tech badges -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <a href="#" id="modal-live"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
            Ver Demo
          </a>
          <a href="#" id="modal-code"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Ver GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="">

</style>