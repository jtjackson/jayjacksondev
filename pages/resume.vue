<template>
  <div class="space-y-8">
    <section class="text-center py-12 bg-gradient-to-b from-blue-50 to-white rounded-xl">
      <h1 class="text-4xl font-bold text-blue-900">Resume</h1>
      <p class="mt-4 text-xl text-gray-600">Professional Experience & Skills</p>
    </section>

    <div class="bg-white p-8 rounded-xl shadow-lg space-y-12">
      <!-- Experience Section -->
      <section>
        <h2 class="text-2xl font-bold text-blue-800 mb-6">Experience</h2>
        <div class="space-y-8">
          <div class="border-l-4 border-blue-200 pl-4">
            <h3 class="text-xl font-semibold">Senior Software Engineer</h3>
            <p class="text-gray-600">CallRevu · Remote • May 2024 - Present</p>
          </div>

          <div class="border-l-4 border-blue-200 pl-4">
            <h3 class="text-xl font-semibold">Senior Software Engineer</h3>
            <p class="text-gray-600">TotalCX (formerly InteractiveTel) · Cypress, TX • May 2019 - May 2024 · 5 yrs 1 mo</p>
          </div>

          <div class="border-l-4 border-blue-200 pl-4">
            <h3 class="text-xl font-semibold">Software Engineer</h3>
            <p class="text-gray-600">Kinesix Software · Houston, TX • Jan 2014 - Apr 2019 · 5 yrs 4 mos</p>
            <ul class="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Designed and prototyped system architecture using Node.js, Redis, WebGL/HTML5</li>
              <li>Developed C++ modules with Qt and Python integration</li>
              <li>Improved GPU rendering performance using various graphics libraries</li>
              <li>Migrated .NET applications from WinForms to WPF</li>
              <li>Provided technical support for aerospace and defense clients</li>
            </ul>
          </div>

          <div class="border-l-4 border-blue-200 pl-4">
            <h3 class="text-xl font-semibold">QA Engineer</h3>
            <p class="text-gray-600">Kinesix Software · Houston, TX • Aug 2005 - Jan 2014 · 8 yrs 6 mos</p>
            <ul class="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Led QA team for Beijing Olympics Metro Line System project</li>
              <li>Implemented test automation using shell scripts and TestComplete</li>
              <li>Managed CI/CD processes and virtual machine infrastructure</li>
              <li>Supervised QA department of 2-3 testers</li>
            </ul>
          </div>

          <div class="border-l-4 border-blue-200 pl-4">
            <h3 class="text-xl font-semibold">Assistive Technology Lab Assistant</h3>
            <p class="text-gray-600">North Harris College · Houston, TX • Oct 2002 - Aug 2005 · 2 yrs 11 mos</p>
            <ul class="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>Managed computer lab for students with disabilities</li>
              <li>Implemented OCR technology and database systems</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section>
        <h2 class="text-2xl font-bold text-blue-800 mb-6">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Languages</h3>
            <ul class="text-gray-600 space-y-1">
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript/Node.js</li>
              <li>C#/.NET</li>
              <li>Shell Scripting</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Technologies</h3>
            <ul class="text-gray-600 space-y-1">
              <li>Qt/GTK+</li>
              <li>WebGL/HTML5</li>
              <li>Redis</li>
              <li>WebSockets</li>
              <li>WPF/WinForms</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Tools & Platforms</h3>
            <ul class="text-gray-600 space-y-1">
              <li>Linux/Unix</li>
              <li>Windows</li>
              <li>Git/SVN</li>
              <li>CI/CD</li>
              <li>Virtualization</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section>
        <h2 class="text-2xl font-bold text-blue-800 mb-6">Education</h2>
        <div class="border-l-4 border-blue-200 pl-4">
          <h3 class="text-xl font-semibold">Bachelor of Science - Physics</h3>
          <p class="text-gray-600">Texas A&M University • 1996 - 2000</p>
        </div>
      </section>
    </div>
  </div>
</template>
