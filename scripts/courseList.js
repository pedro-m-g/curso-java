document.addEventListener('DOMContentLoaded', () => {
  const APP_TITLE = 'Curso de Java'
  const courses = [
    {
      id: '001',
      title: '¡Bienvenido a Java!'
    },
    {
      id: '002',
      title: 'Elementos de un programa Java'
    },
    {
      id: '003',
      title: 'Sintaxis'
    },
    {
      id: '004',
      title: 'Estructuras de Control'
    },
    {
      id: '005',
      title: 'Principios de la Programación Orientada a Objetos'
    }
  ]

  const $sideBar = document.querySelector('.side-bar')

  const coursesHtml = courses
    .map(course => `
      <div id="class-${course.id}" class="class-entry">
        <div class="class-number"></div>
        <div class="class-title">
          <a href="/courses/${course.id}.html" class="class-link">
            ${course.title}
          </a>
        </div>
      </div>
    `).join('')

  $sideBar.innerHTML = coursesHtml

  const selectClass = (id) => {
    const selectedCourse = courses
      .find(course => course.id === id)

    document
      .querySelectorAll('.class-entry')
      .forEach($eachClassEntry => {
        $eachClassEntry.classList.remove('selected')
      });
    const $classEntry = document.getElementById('class-' + id)
    $classEntry.classList.add('selected');

    document.title = selectedCourse?.title ?? APP_TITLE
  };

  if (window.classId !== undefined) {
    selectClass(window.classId)
  }
})
