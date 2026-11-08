/* ÚltimaRuta: maquetación de la Actividad 2.
   Solo interacciones de navegación y validación visual; los datos son simulados. */
(function () {
  'use strict';

  // Íconos Lucide (licencia ISC), los mismos 24 de la guía de estilos de Figma.
  var ICONS = {
    reloj: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    x: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    alerta: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    paradero: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    grupo: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    bus: '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
    estrella: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    inicio: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    aviso: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    perfil: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'flecha-der': '<path d="m9 18 6-6-6-6"/>',
    atras: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    mas: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    menos: '<path d="M5 12h14"/>',
    seguridad: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    iluminacion: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    salon: '<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',
    caminata: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
    luna: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    salir: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
    reporte: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    editar: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
    buscar: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    rutas: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">' +
    Object.keys(ICONS).map(function (k) { return '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>'; }).join('') + '</svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  // Tema claro / oscuro (RQNF005). Se recuerda en este navegador cuando se puede.
  var root = document.documentElement;
  function leerTema() { try { return localStorage.getItem('ur-tema'); } catch (e) { return null; } }
  function guardarTema(t) { try { localStorage.setItem('ur-tema', t); } catch (e) { /* sin almacenamiento */ } }
  function aplicarTema(t) {
    root.setAttribute('data-bs-theme', t);
    document.querySelectorAll('[data-tema]').forEach(function (b) {
      b.setAttribute('aria-label', t === 'dark' ? 'Usar tema claro' : 'Usar tema oscuro');
      var use = b.querySelector('use'); if (use) use.setAttribute('href', t === 'dark' ? '#i-sol' : '#i-luna');
    });
  }
  var inicial = leerTema() || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  var forzado = new URLSearchParams(location.search).get('tema');
  aplicarTema(forzado === 'oscuro' ? 'dark' : forzado === 'claro' ? 'light' : inicial);
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-tema]'); if (!b) return;
    var t = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'; aplicarTema(t); guardarTema(t);
  });

  // Mensaje breve de confirmación.
  function toast(msg) {
    var t = document.querySelector('.toast-ur');
    if (!t) { t = document.createElement('div'); t.className = 'toast-ur'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('visible');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('visible'); }, 2600);
  }
  window.urToast = toast;

  // Ingreso y registro: solo correo institucional (RQF001, HU-07).
  document.querySelectorAll('form[data-correo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      var input = f.querySelector('input[type=email]');
      var ok = /^[^\s@]+@ibero\.edu\.co$/i.test(input.value.trim());
      input.classList.toggle('is-invalid', !ok);
      if (!ok) { e.preventDefault(); input.focus(); }
    });
  });

  // Crear grupo: la hora no puede ser posterior a la hora límite (RQF009, HU-04).
  var hora = document.querySelector('[data-limite]');
  if (hora) {
    var limite = hora.getAttribute('data-limite');
    var publicar = document.querySelector('[data-publicar]');
    var validar = function () {
      var ok = hora.value && hora.value <= limite;
      hora.classList.toggle('is-invalid', !!hora.value && !ok);
      if (publicar) publicar.disabled = !ok;
    };
    hora.addEventListener('input', validar); validar();
  }

  // Cupo de 2 a 8 personas.
  document.querySelectorAll('[data-cupo]').forEach(function (c) {
    var out = c.querySelector('output'); var n = parseInt(out.getAttribute('data-valor'), 10);
    var pintar = function () { out.textContent = n + ' personas'; out.setAttribute('data-valor', n); };
    c.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      n = Math.max(2, Math.min(8, n + (b.hasAttribute('data-mas') ? 1 : -1))); pintar();
    });
  });

  // Contador del comentario (máximo 200 caracteres, RQF018).
  document.querySelectorAll('[data-contador]').forEach(function (t) {
    var out = document.getElementById(t.getAttribute('data-contador'));
    var pintar = function () { out.textContent = t.value.length + '/200'; };
    t.addEventListener('input', pintar); pintar();
  });

  // Docente: el campo de salón solo aplica al cambio de salón.
  document.querySelectorAll('input[name=novedad]').forEach(function (r) {
    r.addEventListener('change', function () {
      var cambio = document.querySelector('input[name=novedad]:checked').value === 'cambio';
      document.querySelectorAll('[data-solo-cambio]').forEach(function (el) { el.hidden = !cambio; });
    });
  });

  // Acciones simuladas.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-toast]'); if (!a) return;
    if (a.tagName === 'BUTTON' && a.type !== 'button') e.preventDefault();
    toast(a.getAttribute('data-toast'));
  });
})();
