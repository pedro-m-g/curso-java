document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.terminal').forEach($terminal => {
    const $copyButton = document.createElement('button')
    $copyButton.title = 'Copiar';
    $copyButton.classList.add('copy-btn')
    $copyButton.innerHTML = `<span class="material-icons">content_copy</span>`
    $copyButton.addEventListener('click', () => {
      const commands = [];
      $terminal.querySelectorAll('code')
        .forEach($code => commands.push($code.innerText))
      const text = commands.join('\n')
      navigator.clipboard.writeText(text)
    })
    $terminal.appendChild($copyButton)
  })
})
