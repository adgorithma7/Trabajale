/* Trabájale: aviso de cookies y Pixel de Meta.
   El Pixel SOLO se carga si la persona pulsa "Aceptar". La elección se guarda en su navegador.
   Para cambiar el ID del Pixel, editar la constante ID. */
(function () {
  var ID = '1579254357561328';
  var CLAVE = 'trabajale-cookies';
  function leer() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
  function guardar(v) { try { localStorage.setItem(CLAVE, v); } catch (e) {} }

  function pixel() {
    if (window.fbq) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', ID);
    fbq('track', 'PageView');
    var extra = document.documentElement.getAttribute('data-evento');
    if (extra) fbq('track', extra);
  }

  /* Evento de botón: no hace nada si el Pixel no está cargado (rechazo o bloqueador). */
  window.tev = function (nombre) { if (typeof fbq === 'function') fbq('track', nombre); };

  function aviso() {
    var css = document.createElement('style');
    css.textContent = '.aviso-ck{position:fixed;left:0;right:0;bottom:0;z-index:50;padding:12px max(12px,env(safe-area-inset-left,0px)) max(12px,env(safe-area-inset-bottom,0px)) max(12px,env(safe-area-inset-right,0px))}' +
      '.aviso-ck .caja{max-width:560px;margin:0 auto;background:#fff;color:#14213D;border:2px solid #1F4FD8;border-radius:16px;padding:14px 16px;box-shadow:0 10px 30px rgba(10,30,100,.25);font:600 14px/1.4 Nunito,"Segoe UI",system-ui,sans-serif}' +
      '.aviso-ck p{margin:0 0 10px}.aviso-ck a{color:#1F4FD8;font-weight:800}' +
      '.aviso-ck .botones{display:flex;gap:10px}.aviso-ck button{flex:1;min-height:44px;border-radius:12px;font:800 15px Nunito,"Segoe UI",system-ui,sans-serif;cursor:pointer}' +
      '.aviso-ck .si{background:#FF7A29;color:#fff;border:0}.aviso-ck .no{background:#fff;color:#1F4FD8;border:2px solid #1F4FD8}';
    document.head.appendChild(css);
    var div = document.createElement('div');
    div.className = 'aviso-ck';
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-label', 'Aviso de cookies');
    div.innerHTML = '<div class="caja"><p>Usamos una cookie de Meta para saber si nuestros anuncios funcionan. Solo se activa si aceptas. ' +
      '<a href="/privacidad">Más información</a></p>' +
      '<div class="botones"><button type="button" class="no">Rechazar</button><button type="button" class="si">Aceptar</button></div></div>';
    document.body.appendChild(div);
    div.querySelector('.si').onclick = function () { guardar('si'); div.remove(); pixel(); };
    div.querySelector('.no').onclick = function () { guardar('no'); div.remove(); };
  }

  var eleccion = leer();
  if (eleccion === 'si') { pixel(); }
  else if (eleccion !== 'no') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aviso); else aviso();
  }
})();
