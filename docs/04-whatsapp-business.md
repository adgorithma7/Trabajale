# Trabájale: configuración de WhatsApp Business

Actualizado: 28 de octubre de 2026.
Número: +58 422 872 2252. Enlace en la web: `https://wa.me/584228722252` con el mensaje prellenado "Hola, quiero información sobre Trabájale".

Todo se hace desde el teléfono que tiene la SIM de ese número. Toma entre 20 y 30 minutos. Es gratis.

---

## 1. Antes de empezar

- **Si ese número ya tiene WhatsApp normal:** no pasa nada. Al instalar WhatsApp Business te ofrece "migrar" la cuenta y conserva los chats. El WhatsApp normal queda libre para otro número si quieres.
- **Si quieres tener los dos en el mismo teléfono:** se puede. WhatsApp normal con tu número personal y WhatsApp Business con el +58 422 872 2252. Son dos aplicaciones distintas.
- Ten a mano un correo al que tengas acceso (sirve `trabajale.ai@gmail.com`). Lo pide la verificación en dos pasos.

---

## 2. Instalar y verificar

1. Instala **WhatsApp Business** (ícono verde con una "B") desde Play Store o App Store.
2. Abre, acepta las condiciones, elige **Venezuela (+58)** y escribe `4228722252`.
3. Llega un SMS con un código de 6 dígitos. Si no llega en 2 minutos, pide "Llamarme".
4. Si pregunta si quieres restaurar una copia de seguridad, acepta solo si ya existía WhatsApp en ese número y quieres conservar los chats.

---

## 3. Perfil de empresa

Al terminar la verificación, la app pide el perfil. Se puede editar después en **Ajustes, Herramientas para la empresa, Perfil de empresa**.

| Campo | Qué poner |
|---|---|
| Nombre de la empresa | `Trabájale` (ojo: después solo se puede cambiar una vez cada cierto tiempo, escríbelo bien, con tilde) |
| Categoría | **Agencia de empleo** (o "Servicios de recursos humanos" si no aparece) |
| Foto de perfil | el archivo `recursos/perfil-whatsapp.png` de esta carpeta. Pásalo al teléfono y súbelo desde la galería |
| Descripción | `Regístrate gratis en trabajale.ai y te contactamos cuando haya una oportunidad de empleo remoto o presencial en Venezuela.` |
| Dirección | dejar vacío |
| Horario | el real en que vayan a responder, por ejemplo lunes a viernes 9:00 a 18:00 |
| Correo | `trabajale.ai@gmail.com` (cambiar a `hola@trabajale.ai` cuando exista) |
| Sitio web | `https://trabajale.ai` |

---

## 4. Mensaje de bienvenida

**Ajustes, Herramientas para la empresa, Mensaje de bienvenida.** Activar y pegar:

```
¡Gracias por escribir a Trabájale! 👋

Si todavía no te registraste, hazlo gratis aquí: https://trabajale.ai

Te contactamos cuando haya una oportunidad para ti. Respondemos de lunes a viernes.
```

En **Destinatarios** elige **Todos**.

Cómo funciona de verdad: este mensaje sale solo cuando **la otra persona escribe primero**, y se repite si pasan 14 días sin conversación. WhatsApp no envía nada a quien se registró en el formulario y no escribió. Para contactar a esa gente hay que escribirles uno por uno, desde el chat, como cualquier mensaje.

---

## 5. Mensaje de ausencia

**Ajustes, Herramientas para la empresa, Mensaje de ausencia.** Activar, programar "Fuera del horario comercial" y pegar:

```
Gracias por tu mensaje. Ahora mismo estamos fuera de horario. Te respondemos el próximo día hábil.

Mientras tanto, puedes registrarte gratis en https://trabajale.ai
```

---

## 6. Respuestas rápidas

**Ajustes, Herramientas para la empresa, Respuestas rápidas.** Se escriben una vez y luego salen tecleando `/` y el atajo en cualquier chat.

| Atajo | Mensaje |
|---|---|
| `/registro` | `Para participar, regístrate gratis en https://trabajale.ai. Toma unos minutos y no tiene costo.` |
| `/datos` | `Solo usamos tus datos para contactarte por oportunidades de empleo. Nunca pedimos cédula, cuentas bancarias ni fotos. No cobramos nada.` |
| `/gracias` | `¡Gracias! Quedas registrado. Te contactamos cuando haya una oportunidad que encaje con tu perfil.` |

Ninguna respuesta promete empleo ni sueldo. Mantener eso en todo lo que se escriba.

---

## 7. Etiquetas para organizar los chats

**Ajustes, Herramientas para la empresa, Etiquetas.** Crear:

- `Registrado`
- `Falta registro`
- `Contactado por oportunidad`
- `En proceso`

Se asignan desde cada chat, menú de los tres puntos, Etiquetar.

---

## 8. Verificación en dos pasos (obligatorio)

**Ajustes, Cuenta, Verificación en dos pasos, Activar.**

1. PIN de 6 dígitos. Guárdalo en el gestor de contraseñas, no en notas del teléfono.
2. Correo de recuperación: `trabajale.ai@gmail.com`.

Sin esto, cualquiera que consiga un SMS de ese número puede robar la cuenta.

---

## 9. Privacidad recomendada

**Ajustes, Privacidad:**

- Foto de perfil, Info, Sitio web: **Todos** (es una cuenta pública de empresa).
- Grupos: **Mis contactos**. Evita que desconocidos metan el número en grupos.
- Confirmaciones de lectura: activas (la gente sabe que leíste).
- Visto por última vez: a criterio tuyo.

---

## 10. Responder desde la computadora

**Ajustes, Dispositivos vinculados, Vincular un dispositivo** y escanear el código en `https://web.whatsapp.com` o en la app WhatsApp de escritorio. Se pueden vincular hasta 4 computadoras. Sirve para que más de una persona atienda sin pasar el teléfono.

---

## 11. Lo que NO hay que hacer

- **No mandar el mismo mensaje a muchos números seguidos**, ni con listas de difusión ni copiando y pegando. WhatsApp detecta el patrón y bloquea el número, a veces de forma permanente. Las listas de difusión además solo llegan a quien tiene el número guardado.
- **No usar apps de "envíos masivos" o "WhatsApp marketing"** no oficiales. Son la causa número uno de bloqueos.
- **No pedir cédula, datos bancarios ni fotos** por el chat. Es regla del proyecto y además protege a las personas.
- **No prometer trabajo ni sueldos.** Solo: "te contactamos cuando haya una oportunidad".

Si en el futuro hace falta avisar a cientos de personas a la vez, existe la API oficial de WhatsApp (de pago, con plantillas aprobadas por Meta). Se evalúa en ese momento; hoy no hace falta.

---

## 12. Checklist

- [ ] WhatsApp Business instalado y verificado con el +58 422 872 2252.
- [ ] Perfil completo: nombre, categoría, foto, descripción, horario, correo, sitio web.
- [ ] Mensaje de bienvenida activo, destinatarios "Todos".
- [ ] Mensaje de ausencia activo con horario.
- [ ] Respuestas rápidas creadas.
- [ ] Etiquetas creadas.
- [ ] Verificación en dos pasos con PIN y correo.
- [ ] Privacidad de grupos en "Mis contactos".
- [ ] Prueba final: desde otro teléfono, abrir `https://wa.me/584228722252`, mandar "Hola" y confirmar que llega el mensaje de bienvenida.
