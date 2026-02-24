import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  privateDemo?: boolean;
}

@Component({
  selector: 'projects-component',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'EmbedBook - Core Backend',
      description: 'Núcleo de mi PFC, un sistema de gestión de reservas. Arquitectura Hexagonal y DDD. Renderizado de vistas SSR para clientes externos y seguridad robusta.',
      technologies: ['Java 21', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Docker', 'Redis', 'MVC'],
      githubUrl: 'https://github.com/PauMorillas/PFG-DAW-Monolito',
      privateDemo: true
    },
    {
      title: 'EmbedBook - Migración Laravel',
      description: 'Evolución técnica del backend de mi PFC hacia un ecosistema PHP. Implementación de patrón CQRS (Command Bus), Jobs para tareas asíncronas y Auth con Sanctum.',
      technologies: ['PHP 8.2', 'Laravel 11', 'CQRS', 'SQL', 'Sanctum', 'Docker', 'DDD', 'Arquitectura Hexagonal'],
      githubUrl: 'https://github.com/PauMorillas/Migration-PFG-DAW-ToLaravel',
      privateDemo: true
    },
    {
      title: 'EmbedBook - Panel Gerentes',
      description: 'SPA avanzada para la administración integral del sistema. Interfaz reactiva, Guards de seguridad, servicios e interceptores.',
      technologies: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNg', 'FullCalendar'],
      githubUrl: 'https://github.com/PauMorillas/PFG-DAW-ANGULARFRONT',
      liveUrl: 'https://paumorillas.github.io/PFG-DAW-ANGULARFRONT/#/'
    },
    {
      title: 'Dashboard de Gestión de Clientes',
      description: 'Panel de administración enfocado en una arquitectura limpia y escalable. Implementa separación de lógica de negocio estricta mediante patrones MVC, Repository, Service, DTO y Facade.',
      technologies: ['Java', 'Spring Boot', 'Patrones de Diseño', 'DTO / Facade', 'SQL'],
      githubUrl: 'https://github.com/PauMorillas/DEMO-SpringBootApp-GestionClientes',
      privateDemo: true
    },
    {
      title: 'Forum WebApp',
      description: 'Plataforma de foros desarrollada con Java 17 y Spring Boot 3.5. Incluye configuración de Spring Security para la protección de rutas y gestión de autenticación con Google (OAuth2).',
      technologies: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'Maven', 'SQL', 'OAuth2'],
      githubUrl: 'https://github.com/PauMorillas/Forum-WebApp',
      privateDemo: true
    },
    {
      title: 'Testimonials API REST',
      description: 'API desarrollada en Node.js para la gestión de reseñas y testimonios de usuarios. Construida bajo estándares de calidad, aplicando buenas prácticas y patrones de diseño en el backend.',
      technologies: ['Node.js', 'API REST', 'Arquitectura Backend', 'Patrones de Diseño', 'SQL'],
      githubUrl: 'https://github.com/PauMorillas/Testimonials-API',
      privateDemo: true

    },
    {
      title: 'Notely - App de Notas',
      description: 'Aplicación de gestión personal rápida y sin dependencias. Manipulación pura del DOM, filtrado dinámico y persistencia de datos asegurada con LocalStorage.',
      technologies: ['Vanilla JS', 'HTML5', 'CSS3', 'SweetAlert2', 'DOM Interaction', 'LocalStorage'],
      githubUrl: 'https://github.com/PauMorillas/Notely-Demo',
      liveUrl: 'https://paumorillas.github.io/Notely-Demo/'
    },
    {
      title: 'Red Panda Restaurant',
      description: 'Landing page moderna y 100% Vanilla. Destaca por animaciones CSS fluidas y diseño de recursos gráficos vectoriales propios (SVG).',
      technologies: ['HTML5', 'CSS3', 'Mobile First', 'Adobe Illustrator'],
      githubUrl: 'https://github.com/PauMorillas/landing-red-panda-restaurant',
      liveUrl: 'https://paumorillas.github.io/landing-red-panda-restaurant/'
    }
  ];
}