<script setup>
import { ref, toRef, onMounted } from 'vue';
import { useMainStore } from './stores/Main';
import Navigator from './components/Navigator.vue';
import Hero from './components/Home/Hero.vue';
import Projects from './components/Home/Projects.vue';
import SkillsAnalytics from './components/Home/SkillsAnalytics.vue';
import Experience from './components/Home/Experience.vue';

const main = useMainStore();

function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = "Enviando...";
  btn.disabled = true;
  setTimeout(() => {
    alert("¡Gracias por tu mensaje! Esto es una simulación, pero en una app real recibirías un correo de confirmación.");
    btn.textContent = "¡Enviado!";
    e.target.reset();
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  }, 1000);
}

</script>
<template>
  <Navigator></Navigator>

  <!-- 1. HERO SECTION -->
  <section id="hero" class="relative pt-24 pb-20 lg:pt-28 lg:pb-30 overflow-hidden">
    <Hero></Hero>
  </section>
  <!-- 2. PROJECTS SECTION -->
  <section id="projects" class="py-20 bg-white">
    <Projects></Projects>
  </section>
  <!-- 3. SKILLS & ANALYTICS SECTION -->
  <section id="skills" class="py-20 bg-slate-50 border-t border-slate-200">
    <SkillsAnalytics></SkillsAnalytics>
  </section>
  <!-- 4. EXPERIENCE HORIZONTAL TIMELINE SECTION (UPDATED) -->
  <section id="experience" class="py-20 bg-white border-t border-slate-200">
    <Experience></Experience>
  </section>
  <!-- 5. ABOUT SECTION (Shifted from 4) -->
  <section id="about" class="py-20 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-slate-900">Sobre Mí</h2>
      </div>
      <div class="prose prose-lg text-slate-600 mx-auto">
        <p class="mb-6">
          Soy un desarrollador apasionado por el código limpio y la arquitectura de software eficiente. Mi filosofía se
          basa en el principio de que <strong>"la mejor línea de código es la que no se tiene que mantener"</strong>,
          priorizando soluciones simples y robustas sobre la complejidad innecesaria.
        </p>
        <p class="mb-6">
          Comencé mi carrera resolviendo pequeños problemas de automatización y rápidamente me enamoré de la capacidad
          de crear productos completos desde cero. Hoy en día, disfruto tanto diseñando una base de datos normalizada
          como ajustando las animaciones CSS para una experiencia de usuario perfecta.
        </p>
        <div class="bg-sky-50 border-l-4 border-sky-500 p-4 my-8">
          <p class="font-bold text-sky-900">Filosofía de Trabajo:</p>
          <p class="italic text-sky-800">"Iterar rápido, probar todo, y poner al usuario en el centro de cada decisión
            técnica."</p>
        </div>
        <p>
          Cuando no estoy programando, me encontrarás contribuyendo a proyectos Open Source, escribiendo en mi blog
          técnico, o disfrutando de una buena taza de café mientras aprendo sobre nuevos paradigmas de programación.
        </p>
      </div>
    </div>
  </section>
  <!-- 6. CONTACT SECTION (Shifted from 5) -->
  <section id="contact" class="py-20 bg-slate-900 text-white border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 class="text-3xl font-extrabold mb-6">¿Tienes un proyecto en mente?</h2>
          <p class="text-slate-400 text-lg mb-8">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus
            visiones.
          </p>
          <div class="space-y-4">
            <div class="flex items-center text-slate-300">
              <span class="icon-md mr-4">📧</span>
              <span>oquendojuanjose@gmail.com</span>
            </div>
            <div class="flex items-center text-slate-300">
              <span class="icon-md mr-4">📍</span>
              <span>Pereira, Colombia (Remoto)</span>
            </div>
          </div>
        </div>
        <div class="bg-slate-800 p-8 rounded-2xl shadow-xl">
          <form onsubmit="handleContact(event)" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-300">Nombre</label>
              <input type="text" id="name"
                class="mt-1 block w-full bg-slate-700 border-transparent rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50 text-white px-4 py-2"
                placeholder="Tu nombre">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-slate-300">Correo Electrónico</label>
              <input type="email" id="email"
                class="mt-1 block w-full bg-slate-700 border-transparent rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50 text-white px-4 py-2"
                placeholder="tu@correo.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-slate-300">Mensaje</label>
              <textarea id="message" rows="4"
                class="mt-1 block w-full bg-slate-700 border-transparent rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50 text-white px-4 py-2"
                placeholder="Cuéntame sobre tu proyecto..."></textarea>
            </div>
            <button type="submit"
              class="w-full bg-sky-600 text-white font-bold py-3 px-4 rounded-md hover:bg-sky-700 transition-colors shadow-lg">
              Enviar Mensaje 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-950 py-8 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>&copy; 2026 Juan José Oquendo Medina Dev.</p>
    </div>
  </footer>
</template>
<style scoped></style>
