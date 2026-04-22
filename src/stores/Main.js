import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({ 
    urlBase: window.location.origin,
    count: 0, 
    category: 'all',
    projects: [],
    skills : {}
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    scrollToSection(id) {
        const el = document.getElementById(id);
        if (el) {
            const navHeight = 64;
            const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    },
    async getProjects() {
      let res = await fetch(`${this.urlBase}/content/data-projects.json`, {
        mode: 'cors',
        method: 'GET'
      })
      res = await res.json();
      this.projects = res['data'];

      const filtered = this.category === 'all' ? this.projects : this.projects.filter(p => p.category === this.category);
      return filtered;
    },
    async getSkills() {
      let res = await fetch(`${this.urlBase}/content/data-skills.json`, {
        mode: 'cors',
        method: 'GET'
      })
      res = await res.json();

      this.skills = res;
      return this.skills;
    },
    async getCV() {
      let res = await fetch(`${this.urlBase}/content/docs/juan-jose-oquendo-medina-cv.pdf`, {
        mode: 'cors',
        method: 'GET'
      })
      res = await res.blob();
      this.cv = URL.createObjectURL(res);
      window.open(this.cv, '_blank');
      return this.cv;
    },
    async initCharts() {
      // Asegúrate de que el script de Chart.js se cargó antes de intentar usarlo
      if (typeof Chart === 'undefined') {
        console.error("Error: Chart.js no se ha cargado. Revisa tu conexión a internet.");
        return;
      }

      const ctx = document.getElementById('skillsChart').getContext('2d');

      // This chart visualizes "Focus Distribution" (Where I spend my effort)
      // It replaces a boring list of skills with a narrative about work style.
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(this.skills.areas),
          datasets: [{
            data: Object.values(this.skills.areas),
            backgroundColor: [
              '#3b82f6', // blue-500
              '#1e293b', // slate-800
              '#64748b', // slate-500
              '#94a3b8'  // slate-400
            ],
            borderWidth: 0,
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 20,
                font: { family: "'Inter', sans-serif" }
              }
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${context.label}: ${context.raw}%`;
                }
              },
              backgroundColor: '#1e293b',
              padding: 12,
              titleFont: { family: "'Inter', sans-serif", size: 14 },
              bodyFont: { family: "'Fira Code', monospace", size: 13 }
            }
          },
          cutout: '65%'
        }
      });
    }
  }
})
